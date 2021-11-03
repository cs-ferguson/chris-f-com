function videoHtml(tokens, idx /*, options, env */) {
  let token = tokens[idx];
  return `<video preload="metadata" controls>
  <source src="/video/${token.videoFilename}.mp4" type="video/mp4" />
  <source src="/video/${token.videoFilename}.webm" type="video/webm" />
  Uh-oh, your browser doesn't support this type of video!
  </video>`;
}

function createRule(md, options) {
  return function tokenizeVideo(state) {
    let blockTokens = state.tokens;
    let scanRE = /@\[([a-zA-Z].+)]\([\s]*(.*?)[\s]*[)]/gm;

    for (const token of blockTokens) {
      let tokenMatch = [...token.content.matchAll(scanRE)];
      if (tokenMatch.length > 0) {
        token.type = "video";
        token.tag = "";
        token.children = null;
        token.title = tokenMatch[0][1];
        token.videoFilename = tokenMatch[0][2];
      }
    }
  };
}

module.exports = function videoPlugin(md, options) {
  md.renderer.rules.video = videoHtml;
  md.core.ruler.push("video", createRule(md, {}));
};
