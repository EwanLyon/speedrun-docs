import type { Options as DocsPluginOptions } from "@docusaurus/plugin-content-docs";
import type { Options as BlogPluginOptions } from "@docusaurus/plugin-content-blog";
import type { Options as PagesPluginOptions } from "@docusaurus/plugin-content-pages";
import type { Options as SitemapPluginOptions } from "@docusaurus/plugin-sitemap";
import type { Options as GAPluginOptions } from "@docusaurus/plugin-google-analytics";
import type { Options as GtagPluginOptions } from "@docusaurus/plugin-google-gtag";
import type { Options as GTMPluginOptions } from "@docusaurus/plugin-google-tag-manager";
import type { PluginOptions as LocalSearchThemeConfig } from "@easyops-cn/docusaurus-search-local";
import type { Options as ClassicThemeOptions } from "@docusaurus/theme-classic";
import type { ThemeConfig as BaseThemeConfig } from "@docusaurus/types";
import type { UserThemeConfig as ClassicThemeConfig } from "@docusaurus/theme-common";

// Key string unknown is required for some reason...
interface LocalSearchConfig extends LocalSearchThemeConfig {
	[key: string]: unknown;
}

/**
 * Options for `@ewanlyon/speedrun-preset`.
 */
export type Options = {
	/**
	 * Options for `@docusaurus/plugin-debug`. Use `false` to disable, or `true` to enable even in production.
	 */
	debug?: boolean;
	/** Options for `@docusaurus/plugin-content-docs`. Use `false` to disable. */
	docs?: false | DocsPluginOptions;
	/** Options for `@docusaurus/plugin-content-blog`. Use `false` to disable. */
	blog?: false | BlogPluginOptions;
	/** Options for `@docusaurus/plugin-content-pages`. Use `false` to disable. */
	pages?: false | PagesPluginOptions;
	/** Options for `@docusaurus/plugin-sitemap`. Use `false` to disable. */
	sitemap?: false | SitemapPluginOptions;
	/** Options for `@docusaurus/theme-classic`. */
	theme?: ClassicThemeOptions;
	/** Options for `@easyops-cn/docusaurus-search-local`. */
	localSearch?: false | LocalSearchConfig; // Local search essentially behaves like a plugin but is technically used in themes
	/**
	 * Options for `@docusaurus/plugin-google-analytics`. Only enabled when the key is present.
	 */
	googleAnalytics?: GAPluginOptions;
	/**
	 * Options for `@docusaurus/plugin-google-gtag`. Only enabled when the key is present.
	 */
	gtag?: GtagPluginOptions;
	googleTagManager?: GTMPluginOptions;
};

export type ThemeConfig = BaseThemeConfig & ClassicThemeConfig;
