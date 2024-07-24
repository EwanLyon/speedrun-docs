/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: message Clubwho
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
	| "favourite"
	// Feel free to add the 'design' tag as long as there's _some_ level of
	// CSS/swizzling.
	| "design"
	// Site must have more than one locale.
	| "i18n"
	// Large sites are defined as those with > 200 pages, excluding versions.
	| "large"
	| "personal";

// Add sites to this list
// prettier-ignore
const Websites: Website[] = [
  {
    title: 'Heavenly Bodies',
    description: 'Heavenly Bodies',
    preview: require('./images/heavenly-bodies.png'),
    website: 'https://ewanlyon.github.io/heavenly-bodies-speedrun-docs/',
    source: 'https://github.com/ewanlyon/heavenly-bodies-speedrun-docs',
    tags: ['design', 'favourite'],
  },

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type Website = {
	title: string;
	description: string;
	preview: string | null; // null = use our serverless screenshot service
	website: string;
	source: string | null;
	tags: TagType[];
};

export type Tag = {
	label: string;
	description: string;
	color: string;
};

export const Tags: { [type in TagType]: Tag } = {
	favourite: {
	  label:"Favourite",
	  description: "Our favourite Speedrun-Docs sites that you must absolutely check out!",
	  color: '#e9669e',
	},
	design: {
		label: "Design",
		description: "Beautiful Speedrun-Docs sites, polished and standing out from the initial template!",
		color: "#a44fb7",
	},
	i18n: {
		label: "I18n",
		description: "Translated Speedrun-Docs sites using the internationalization support with more than 1 locale.",
		color: "#127f82",
	},
	large: {
		label: "Large",
		description: "Very large Speedrun-Docs sites, including many more pages than the average!",
		color: "#8c2f00",
	},
	personal: {
		label: "Personal",
		description: "Personal websites, blogs and digital gardens built with Speedrun-Docs",
		color: "#14cfc3",
	},
};

export const TagList = Object.keys(Tags) as TagType[];
function sortWebsites() {
	let result = Websites;
	// Sort by site name
	result = result.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
	return result;
}

export const sortedWebsites = sortWebsites();
