import type { Preset, LoadContext, PluginConfig, PluginOptions } from "@docusaurus/types";
import type { Options, ThemeConfig } from "./options";
import { videoLinkerRemark } from "speedrun-theme";

function makePluginConfig(source: string, options?: PluginOptions): string | [string, PluginOptions] {
	if (options) {
		return [require.resolve(source), options];
	}
	return require.resolve(source);
}

export default function preset(context: LoadContext, opts: Options = {}): Preset {
	const isProd = process.env.NODE_ENV === "production";
	const { debug, docs, blog, pages, sitemap, theme, googleAnalytics, gtag, googleTagManager, localSearch, ...rest } =
		opts;

	const themes: PluginConfig[] = [];

	themes.push(makePluginConfig("@docusaurus/theme-classic", theme));
	themes.push(makePluginConfig("speedrun-theme"));

	if (localSearch !== false) {
		themes.push(makePluginConfig("@easyops-cn/docusaurus-search-local", localSearch));
	}

	const plugins: PluginConfig[] = [];

	if (docs !== false) {

		// Default docs settings
		const docOptions: Options['docs'] = {
			remarkPlugins: [
				videoLinkerRemark
			],
			...docs,
		}

		plugins.push(makePluginConfig("@docusaurus/plugin-content-docs", docOptions));
	}

	if (blog !== false) {
		plugins.push(makePluginConfig("@docusaurus/plugin-content-blog", blog));
	}

	if (pages !== false) {
		plugins.push(makePluginConfig("@docusaurus/plugin-content-pages", pages));
	}

	if (googleAnalytics) {
		plugins.push(makePluginConfig("@docusaurus/plugin-google-analytics", googleAnalytics));
	}

	if (debug || (debug === undefined && !isProd)) {
		plugins.push(require.resolve("@docusaurus/plugin-debug"));
	}

	if (gtag) {
		plugins.push(makePluginConfig("@docusaurus/plugin-google-gtag", gtag));
	}
	
	if (googleTagManager) {
		plugins.push(makePluginConfig("@docusaurus/plugin-google-tag-manager", googleTagManager));
	}

	if (isProd && sitemap !== false) {
		plugins.push(makePluginConfig("@docusaurus/plugin-sitemap", sitemap));
	}

	if (Object.keys(rest).length > 0) {
		throw new Error(
			`Unrecognized keys ${Object.keys(rest).join(
				", "
			)} found in preset-classic configuration. The allowed keys are localSearch, debug, docs, blog, pages, sitemap, theme, googleAnalytics, gtag, and googleTagManager.`
		);
	}

	return { themes, plugins };
}

export type { Options, ThemeConfig };
