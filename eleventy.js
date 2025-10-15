// .eleventy.js
module.exports = function(eleventyConfig) {
    // Copy /src/assets to /assets in the output
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  
    return {
      dir: {
        input: "src",
        includes: "_includes",
        layouts: "_includes/layouts",
        output: "_site"
      },
      // IMPORTANT: allow .html to use front matter & Nunjucks tags
      templateFormats: ["html", "md"],
      htmlTemplateEngine: "njk",
      markdownTemplateEngine: "njk"
    };
  };
  