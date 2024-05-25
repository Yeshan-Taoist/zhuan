import type { DefaultTheme } from "vitepress";
export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "考试大纲",
    collapsed: false,
    items: [{ text: "考试大纲", link: "/" }],
  },
  {
    text: "法律法规",
    collapsed: false,
    items: [
      {
        text: "安全生产法律基础",
        collapsed: false,
        link: "",
      },
      {
        text: "安全生产根本法",
        collapsed: true,
        items: [
          {
            text: "中华人民共和国宪法",
            link: "./law/PRC-xianfa.md",
          },
          {
            text: "中华人民共和国安全生产法",
            link: "./law/PRC-anquanshengchanfa.md",
          },
        ],
      },
      {
        text: "安全生产单行法律",
        collapsed: true,
        items: [
          {
            text: "中华人民共和国矿山安全法",
            link: "",
          },
          {
            text: "中华人民共和国消防法",
            link: "",
          },
          {
            text: "中华人民共和国道路交通安全法",
            link: "",
          },
          {
            text: "中华人民共和国特种设备安全法",
            link: "",
          },
          {
            text: "中华人民共和国建筑法",
            link: "",
          },
        ],
      },
      {
        text: "安全生产相关法律",
        collapsed: true,
        items: [
          {
            text: "中华人民共和国民法典",
            link: "",
          },
          {
            text: "中华人民共和国刑法",
            link: "",
          },
          {
            text: "中华人民共和国行政处罚法",
            link: "",
          },
          {
            text: "中华人民共和国行政强制法",
            link: "",
          },
          {
            text: "中华人民共和国劳动法",
            link: "",
          },
          {
            text: "中华人民共和国劳动合同法",
            link: "",
          },
          {
            text: "中华人民共和国突发时间应对发法",
            link: "",
          },
          {
            text: "中华人民共和国职业病防治法",
            link: "",
          },
        ],
      },
      {
        text: "安全生产行政法规",
        collapsed: true,
        items: [
          {
            text: "安全生产许可证条例",
            link: "",
          },
          {
            text: "煤矿安全监察条例",
            link: "",
          },
          {
            text: "国务院关于预防煤矿安全生产事故的特别规定",
            link: "",
          },
          {
            text: "建设工程安全管理条例",
            link: "",
          },
          {
            text: "危险化学品安全管理条例",
            link: "",
          },
          {
            text: "烟花爆竹安全管理条例",
            link: "",
          },
          {
            text: "民用爆炸物品安全管理条例",
            link: "",
          },
          {
            text: "特种设备安全监察条例",
            link: "",
          },
          {
            text: "生产安全事故应急条例",
            link: "",
          },
          {
            text: "生产安全事报告和调查处理条例",
            link: "",
          },
          {
            text: "工伤保险条例",
            link: "",
          },
          {
            text: "大型群众性活动安全管理条例",
            link: "",
          },
          {
            text: "女职工劳动保护特别规定",
            link: "",
          },
        ],
      },
      {
        text: "安全生产部门规章",
        collapsed: true,
        items: [
          {
            text: "占位",
            link: "",
          },
        ],
      },
      {
        text: "安全生产相关标准",
        collapsed: true,
        items: [
          {
            text: "占位",
            link: "",
          },
        ],
      },
    ],
  },
];
