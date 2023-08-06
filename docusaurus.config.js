// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const speeddocsConfig = require('./speeddocs.json');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${speeddocsConfig.game} Docs`,
  favicon: 'img/favicon.ico',
  url: speeddocsConfig.url,
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            `https://github.com/${speeddocsConfig.github.username}/${speeddocsConfig.github.projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            `https://github.com/${speeddocsConfig.github.username}/${speeddocsConfig.github.projectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
