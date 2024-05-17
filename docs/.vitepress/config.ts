import { defineConfig } from "vitepress";
import { nav } from "./nav";
import { sidebar } from "./sidebar";

export default defineConfig({
  base: "/zhuan/",
  // srcDir: "./source",
  lang: "en-US",
  title: "中级注册安全工程师备考指南",
  description: "中级注册安全工程师备考相关内容",
  lastUpdated: true,
  cleanUrls: true,
  // 忽略死链
  ignoreDeadLinks: true,
  //暗黑模式
  appearance: "dark",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
  ],

  //markdown定义
  markdown: {
    theme: "material-theme-palenight",
    lineNumbers: true,
    config: (md) => {
      // use more markdown-it plugins!
      // md.use(require("markdown-it-task-lists"));
      // md.use(require("markdown-it-sub"));
      // md.use(require("markdown-it-sup"));
      // md.use(require("markdown-it-emoji"));
      // md.use(require("markdown-it-katex"));
    },
  },

  themeConfig: {
    outline: "deep",
    outlineTitle: "目录",
    lastUpdatedText: "更新时间",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav,
    sidebar,
    editLink: {
      pattern: "https://github.com/Yeshan-Taoist/zhuan",
      text: "在 GitHub 上编辑本章内容",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Yeshan-Taoist/zhuan",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Yeshan Taoist",
    },
    search: {
      provider: "local",
    },
  },
});
