export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');

	// These folders go to the site as they are.
	for (const folder of ['assets', 'css', 'js', 'fonts', 'icons', 'images']) {
		eleventyConfig.addPassthroughCopy(`src/${folder}`);
	}
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};
