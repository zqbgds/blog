import { defineConfig } from "vitepress";
export default defineConfig({
  base: "/blog/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/blog/logo.svg",
      },
    ],
  ],
  title: "李志强的博客笔记",
  description: "A VitePress Site",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Zhiqiang Li",
    },
  },
});
