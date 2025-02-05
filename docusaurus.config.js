// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'senhasegura Help Center',
  tagline: 'senhasegura documentation',
  favicon: 'img/favicon.ico',

  url: 'https://docs-senhasegura.vercel.app/',
  baseUrl: '/',

  organizationName: 'facebook', // Ajuste conforme necessário
  projectName: 'docusaurus',    // Ajuste conforme necessário

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
    localeConfigs: {
      'pt-BR': {
        label: 'Português (Brasil)',
        direction: 'ltr',
        htmlLang: 'pt-BR',
      },
    },
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gpilottiduarte/docs-senhasegura',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/gpilottiduarte/docs-senhasegura',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'api/index.yaml',
            route: '/api/',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'senhasegura',
      logo: {
        alt: 'senhasegura',
        src: 'img/senhasegura.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/api',
          label: 'API',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // Seus links do footer aqui
      ],
      copyright: `Copyright © ${new Date().getFullYear()} senhasegura, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
