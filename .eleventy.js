const dayjs = require("dayjs");
const fs = require("fs");
const path = require("path");
const Image = require("@11ty/eleventy-img");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const {parseHTML} = require("linkedom");
const markdownIt = require("markdown-it");
const markdownItFigs = require("markdown-it-image-figures");
const markdownItVideos = require("./src/utils/markdown-videos-plugin");
const markdownItQuotes = require("./src/utils/markdown-quotes-plugin");
const markdownItNotes = require("./src/utils/markdown-notes-plugin");

// 11ty configuration
module.exports = (config) => {
  //plugins
  config.addPlugin(pluginRss);

  //modify ignores - available in v1.0!!
  // if (process.env.ELEVENTY_ENV == "production") {
  //   config.ignores.delete("src/drafts");
  // }

  //image transform
  config.addTransform("transform", async (content, outputPath) => {
    const options = {
      widths: [300, 600, 900],
      formats: ["webp", "jpeg"],
      urlPath: "/img/",
      outputDir: "./src/img/",
    };

    if (outputPath && outputPath.endsWith(".html")) {
      let {document} = parseHTML(content);

      let images = document.querySelectorAll("img");

      for (const image of images) {
        const src = image.getAttribute("src");

        //ignore gifs
        if (!src.match(/\.gif$/g)) {
          let metadata = await Image(src, {
            widths: [240, 480, 640, 900, 1280],
            formats: ["webp"],
            urlPath: "/img/",
            outputDir: "./src/img/",
            filenameFormat: function (id, src, width, format, options) {
              const extension = path.extname(src);
              const name = path.basename(src, extension);
              return `${name}-${width}w.${format}`;
            },
          });
          let highdata = metadata.webp[metadata.webp.length - 1];
          let lowdata = metadata.webp[0];
          image.setAttribute("width", highdata.width);
          image.setAttribute("height", highdata.height);
          image.setAttribute("src", lowdata.url);
          image.setAttribute(
            "srcset",
            metadata.webp.map((p) => p.srcset)
          );
          image.setAttribute("loading", "lazy");
          image.setAttribute("decoding", "async");
        }
      }

      return `<!DOCTYPE html>${document.documentElement.outerHTML}`;
    }
    return content;
  });
  //auto read tags by directory - will default to true in v1
  config.setDataDeepMerge(true);

  // Copy the `img` and `css` folders to the output
  config.addPassthroughCopy("src/img");
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/video");
  config.addPassthroughCopy("src/fonts");
  config.addPassthroughCopy("_redirects");

  //filters
  config.addFilter("checkIfPost", (tags) =>
    tags.indexOf("posts") > -1 ? true : false
  );
  config.addFilter("presentDate", (dateText) =>
    dayjs(dateText).format("D MMMM, YYYY")
  );
  config.addFilter("isoDate", (dateText) =>
    dayjs(dateText).format("YYYY-MM-DD")
  );
  config.addFilter("addOne", (number) => parseInt(number, 10) + 1);

  //set markdown library and add figures and captions
  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: false,
  })
    .use(markdownItFigs, {
      figcaption: true,
    })
    .use(markdownItQuotes, {})
    .use(markdownItNotes, {})
    .use(markdownItVideos, {});
  config.setLibrary("md", markdownLibrary);

  // Override Browsersync defaults (used only with --serve)
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const contentSitemap = fs.readFileSync("build/sitemap.xml");
        const content404 = fs.readFileSync("build/404.html");
        const contentFeed = fs.readFileSync("build/feed/feed.xml");

        browserSync.addMiddleware("*", (req, res) => {
          if (req == "http://localhost:8081/sitemap.xml") {
            // Provides the sitemap content without redirect.
            res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
            res.write(contentSitemap);
            res.end();
          } else if (req == "http://localhost:8081/feed/feed.xml") {
            // Provides the feed file without redirect.
            res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
            res.write(contentFeed);
            res.end();
          } else {
            res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
            res.write(content404);
            res.end();
          }
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  // 11ty defaults
  return {
    dir: {
      input: "src",
      output: "build",
    },
  };
};
