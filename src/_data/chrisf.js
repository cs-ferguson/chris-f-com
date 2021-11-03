module.exports = function () {
  return {
    environment: process.env.ELEVENTY_ENV,
    rootUrl:
      process.env.ELEVENTY_ENV == "develop"
        ? "http://localhost:8081"
        : process.env.ELEVENTY_ENV == "production"
        ? "https://chris-f.com"
        : "",
  };
};
