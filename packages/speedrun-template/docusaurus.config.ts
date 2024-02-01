import speedrunDocsConfig from "./speedrun-docs.json";

import type { Config } from "@docusaurus/types";
import type { Options, ThemeConfig } from "speedrun-preset";
import { themes as prismThemes } from "prism-react-renderer";

const optionalNavbarItems: Record<string, any>[] = [];
const optionalFooterItems: Record<string, any>[] = [];

if (speedrunDocsConfig["speedrun.com"]) {
	optionalNavbarItems.push({
		href: speedrunDocsConfig["speedrun.com"],
		position: "right",
		label: "Leaderboards",
	});

	optionalFooterItems.push({
		href: speedrunDocsConfig["speedrun.com"],
		label: "Leaderboards",
	});
}

if (speedrunDocsConfig.discord) {
	optionalNavbarItems.push({
		href: speedrunDocsConfig.discord,
		position: "right",
		className: "header-discord-link",
		"aria-label": "Discord server invite",
	});

	optionalFooterItems.push({
		href: speedrunDocsConfig.discord,
		label: "Discord",
		"aria-label": "Discord server invite",
	});
}

const config: Config = {
	title: `${speedrunDocsConfig.game} Docs`,
	favicon: "img/favicon.ico",
	url: `https://${speedrunDocsConfig.github.username}.github.io/`,
	baseUrl: `/${speedrunDocsConfig.github.repository}`,
	organizationName: speedrunDocsConfig.github.username,
	projectName: speedrunDocsConfig.github.repository,
	trailingSlash: false,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	presets: [
		[
			"speedrun-preset",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl: `https://github.com/${speedrunDocsConfig.github.username}/${speedrunDocsConfig.github.repository}/tree/main/`,
				},
			} satisfies Options,
		],
	],
	themeConfig: {
		navbar: {
			title: `${speedrunDocsConfig.game} Speedrun Docs`,
			logo: {
				alt: "Speedrun Docs Logo",
				src: "img/run-man.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Tutorial",
				},
				{
					type: "docSidebar",
					sidebarId: "resourcesSidebar",
					position: "left",
					label: "Resources",
				},
				...optionalNavbarItems,
				{
					href: `https://github.com/${speedrunDocsConfig.github.username}/${speedrunDocsConfig.github.repository}`,
					position: "right",
					className: "header-github-link",
					"aria-label": "GitHub repository",
				},
			],
		},
		footer: {
			copyright: "Made with Speedrun Docs/Docusaurus",
			links: optionalFooterItems,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ["powershell", "json", "yaml"],
		},
		colorMode: {
			defaultMode: "dark",
		},
	} satisfies ThemeConfig,
	themes: [],
};

export default config;
