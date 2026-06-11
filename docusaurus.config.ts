import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '九头虫 RPA',
  tagline: '浏览器原生自动化插件',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://doc-jtcrpa.com',
  baseUrl: '/',

  organizationName: 'jtcrpa',
  projectName: 'doc-jtcrpa-com',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/image.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '九头虫 RPA',
      logo: {
        alt: '九头虫 RPA',
        src: 'img/logo.svg',
        href: '/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://github.com/jtcrpa',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '介绍',
              to: '/',
            },
            {
              label: '快速上手',
              to: '/quick-start',
            },
            {
              label: '功能组件',
              to: '/components',
            },
          ],
        },
        {
          title: '核心概念',
          items: [
            {
              label: 'CSS 选择器',
              to: '/core-concepts/css-selectors',
            },
            {
              label: '变量与表达式',
              to: '/core-concepts/variables',
            },
            {
              label: '数据清理管道',
              to: '/core-concepts/data-transform',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'CSS 选择器教程',
              to: '/reference/css-selector-tutorial',
            },
            {
              label: 'URL 匹配模式',
              to: '/reference/match-patterns',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 九头虫 RPA. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
