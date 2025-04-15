// @ts-check
import 'dotenv/config';
import tailwindPlugin from "./plugins/tailwind-config.cjs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Creative Hub",
  tagline: "Um site para apresentar e documentar meus projetos recentes.",
  favicon: "img/favicon.ico",
  url: "https://creative-hub.vercel.app/",
  baseUrl: "/",
  organizationName: "IgorNMS",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  customFields:{
    secToken: process.env.SEC_TOKEN,
    apiLink: process.env.API_LINK
  },
  plugins: [
      'docusaurus2-dotenv',
      tailwindPlugin
  ],
  i18n: {
    defaultLocale: "br",
    locales: ["br", "en"],
    path: 'i18n',
    localeConfigs: {
      br:{
        label:'Brasileiro',
        direction: 'ltr',
        htmlLang: 'pt-BR',
        calendar: 'gregory',
        path: 'br'
      },
      en:{
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      }
    }
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/creativeHub.webp",
      navbar: {
        title: "Creative Hub",
        logo: {
          alt: "Logo",
          src: "img/logo.webp",
          width: "32px",
          height: "50px"
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs"
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left"
          },
          {
            href: "https://github.com/IgorNMS",
            label: "GitHub",
            position: "right"
          },
          {
            type: 'localeDropdown',
            position: 'left',
          }
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Projetos",
                to: "docs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/igor.s.n.m/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/g8XZgdejXc",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Iguh_Nm",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/igornm/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/IgorNMS",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Creative Hub, Inc. Construido com Docusaurus.`,
      },
    }),
};

export default config;
