// This function is used to configure the Eleventy generator.

// If you want to experiment with other configuration settings,
// you can read about them here: https://www.11ty.dev/docs/config/

export default function (eleventyConfig) {
	// 
	eleventyConfig.addPassthroughCopy("**/*.jpg");
};