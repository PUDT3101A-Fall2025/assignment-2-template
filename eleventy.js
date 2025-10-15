// .eleventy.js
module.exports = function(eleventyConfig) {
    // copy /src/assets → /assets in the output
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  
    return {
      dir: {
        input: "src",
        includes: "_includes",
        layouts: "_includes/layouts",
        output: "_site"
      },
      // IMPORTANT: let .html files use front matter + nunjucks tags
      templateFormats: ["html", "md"],
      htmlTemplateEngine: "njk",
      markdownTemplateEngine: "njk"
    };
  };
  