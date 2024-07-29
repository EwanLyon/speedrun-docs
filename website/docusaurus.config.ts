import speedrunDocsConfig from "./speedrun-docs.json";

import type { Config } from "@docusaurus/types";
import type { Options, ThemeConfig } from "speedrun-preset";
import { themes as prismThemes } from "prism-react-renderer";

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
				theme: {
					customCss: ["./src/css/custom.css"],
				},
			} satisfies Options,
		],
	],
	themeConfig: {
		navbar: {
			title: "Speedrun Docs",
			logo: {
				alt: "Speedrun Docs Logo",
				src: "img/run-man.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Tutorials",
				},
				{
					position: "left",
					label: "Showcase",
					to: "showcase",
				},
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
