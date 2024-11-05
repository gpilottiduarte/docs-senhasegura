// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'senhasegura Help Center',
  tagline: 'senhasegura documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs-senhasegura.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/gpilottiduarte/docs-senhasegura',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/gpilottiduarte/docs-senhasegura',
          // Useful options to enforce blogging best practices
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
        // Plugin Options for loading OpenAPI files
        specs: [
          // Pass it a path to a local OpenAPI YAML file
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            spec: 'api/index.yaml',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
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
            to: '/api', // Caminho relativo à baseUrl
            label: 'API',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'SENHASEGURA',
            items: [
              {
                label: 'Contato',
                href: 'https://senhasegura.com/pt-br/contato?utm_source=helpcenter&utm_medium=referral&utm_campaign=helpcenter_senhasegura',
              },
              {
                label: 'Política de suporte',
                href: 'https://docs.senhasegura.io/docs/pt/support-policy',
              },
              {
                label: 'Serviços profissionais',
                href: 'https://docs.senhasegura.io/docs/pt/professional-services',
              },
              {
                label: 'End of Life - EoL',
                href: 'https://docs.senhasegura.io/docs/pt/end-of-life-eol',
              },
              {
                label: 'Guia para resolução de vulnerabilidades',
                href: 'https://docs.senhasegura.io/docs/pt/vulnerability-handling-guidelines',
              },
              {
                label: 'Certificação ISO 27001',
                href: 'https://docs.senhasegura.io/docs/pt/iso-27001-certification',
              },
            ],
          },
          {
            title: 'LEARN',
            items: [
              {
                label: 'senhasegura Community',
                href: 'https://community.senhasegura.io/',
              },
              {
                label: 'senhasegura Academy',
                href: 'https://academy.senhasegura.com/my/?utm_source=HelpCenter&utm_medium=Footer&utm_campaign=FooterLink',
              },
              {
                label: 'senhasegura Shorts',
                href: 'https://d.senhasegura.io/shorts?utm_source=HelpCenter&utm_medium=Footer&utm_campaign=FooterLink',
              },
              {
                label: 'Blog',
                href: 'https://senhasegura.com/blog/?utm_source=HelpCenter&utm_medium=Footer&utm_campaign=FooterLink',
              },
              {
                label: 'Cyber notes cast',
                href: 'https://open.spotify.com/show/5JpD1BYjxwxDO38ngoiwwB?si=7060114f2b1b4a15',
              },
            ],
          },
          {
            title: 'EXPLORE',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/gpilottiduarte/docs-senhasegura',
              },
              {
                label: 'Materiais ricos',
                href: 'https://lp.senhasegura.co/pt/materiais-ricos?utm_source=helpcenter&utm_medium=referral&utm_campaign=helpcenter_explore',
              },
              {
                label: 'Portal Affinity',
                href: 'https://newaffinity.senhasegura.io/?utm_source=HelpCenter&utm_medium=Footer&utm_campaign=FooterLink',
              },
              {
                label: 'PAM Solution',
                href: 'https://suporte.senhasegura.com/?utm_source=HelpCenter&utm_medium=Footer&utm_campaign=FooterLink',
              },
              {
                label: 'Solicitar feature',
                href: 'https://senhasegura.com/pt-br/suggestions?utm_source=helpcenter&utm_medium=referral&utm_campaign=helpcenter_explore',
              },
            ],
          },
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
