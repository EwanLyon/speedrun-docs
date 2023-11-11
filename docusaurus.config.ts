import speeddocsConfig from './speedrun-docs.json';
import type { Config } from '@docusaurus/types';
import type { Options, ThemeConfig } from '@docusaurus/preset-classic';

import { themes as prismThemes } from 'prism-react-renderer';

const optionalNavbarItems: Record<string, any>[] = [];

if (speeddocsConfig['speedrun.com']) {
  optionalNavbarItems.push({
    href: speeddocsConfig['speedrun.com'],
    position: 'right',
    label: 'Leaderboards'
  });
}

if (speeddocsConfig.discord) {
  optionalNavbarItems.push({
    href: speeddocsConfig.discord,
    position: 'right',
    className: 'header-discord-link',
    'aria-label': 'Discord server invite',
  });
}

const config: Config = {
  title: `${speeddocsConfig.game} Docs`,
  favicon: 'img/favicon.ico',
  url: `https://${speeddocsConfig.github.username}.github.io/`,
  baseUrl: `/${speeddocsConfig.github.projectName}`,
  organizationName: speeddocsConfig.github.username,
  projectName: speeddocsConfig.github.projectName,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            `https://github.com/${speeddocsConfig.github.username}/${speeddocsConfig.github.projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            `https://github.com/${speeddocsConfig.github.username}/${speeddocsConfig.github.projectName}/tree/main/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Options,
    ],
  ],
  themeConfig:
    {
      navbar: {
        title: `${speeddocsConfig.game} Speedrun Docs`,
        logo: {
          alt: 'Speedrun Docs Logo',
          src: 'img/run-man.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'resourcesSidebar',
            position: 'left',
            label: 'Resources',
          },
          ...optionalNavbarItems,
          {
            href: `https://github.com/${speeddocsConfig.github.username}/${speeddocsConfig.github.projectName}`,
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } satisfies ThemeConfig,
};

export default config;