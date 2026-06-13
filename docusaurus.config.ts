import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '九头虫RPA帮助文档',
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

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['zh', 'en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/image.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '九头虫RPA帮助文档',
      items: [
        {
          type: 'html',
          value: '<a class="navbar__link bilibili-link" href="https://www.bilibili.com/video/BV1tQJn6oEtS/?spm_id_from=333.1387.collection.video_card.click" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style="vertical-align:-3px;margin-right:4px"><path d="M8.465 2.137c.382-.13.777.074.905.444l.007.018 2.022 5.596h1.134L14.594 2.6a.666.666 0 0 1 .879-.44l.033.013a.666.666 0 0 1 .44.84l-.007.023-2.18 5.07c1.03.195 1.862.697 2.354 1.412.573.835.775 1.887.587 3.079-.206 1.31-.557 2.16-.828 2.77a5.07 5.07 0 0 1-1.6 1.904c-.797.568-1.736.837-2.684.916l-.168.011H9.397a6.24 6.24 0 0 1-2.391-.585 4.76 4.76 0 0 1-1.71-1.274l-.125-.142-.098-.127C4.528 14.63 4 13.486 4 11.8c0-1.14.18-2.05.5-2.8.315-.742.745-1.318 1.261-1.76.88-.754 1.978-1.171 3.364-1.245l.177-.003.105-.002-1.398-3.915a.67.67 0 0 1 .44-.846zM9.364 8.664c-1.099.006-2.008.316-2.66.88-.555.48-.896 1.1-1.051 1.814l-.026.158-.018.155c-.122 1.175.106 1.97.376 2.448.072.13.154.26.244.388l.047.06a3.68 3.68 0 0 0 1.2 1.006c.466.233.947.365 1.44.432l.197.02.186.008h1.77c.738-.061 1.33-.241 1.78-.55a3.55 3.55 0 0 0 1.13-1.289c.2-.4.48-1.095.645-2.13.135-.86.02-1.588-.37-2.16-.402-.588-1-.943-1.768-1.036l-.17-.014-.185-.006zM11.796 9.97c.33 0 .598.268.598.598v3.196a.598.598 0 0 1-1.196 0v-3.196c0-.33.268-.598.598-.598zm-1.197.598a1.197 1.197 0 1 1 2.394 0v3.196a1.197 1.197 0 1 1-2.394 0z"/></svg>视频教程</a>',
          position: 'left',
        },
        {
          href: 'https://jtcrpa.com',
          label: '网站首页',
          position: 'right',
        },
        {
          href: 'https://github.com/zhulinjia/doc-jtcrpa-com',
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
              label: '元素选择器',
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
      copyright: `Copyright © ${new Date().getFullYear()} 九头虫RPA. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
