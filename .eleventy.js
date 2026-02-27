module.exports = function(eleventyConfig) {
  // Copy CSS folder to output
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy images if we add them later
  eleventyConfig.addPassthroughCopy("src/images");

  // Blog collection - newest first
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").reverse();
  });

  // Date formatting filter
  eleventyConfig.addFilter("dateString", function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
