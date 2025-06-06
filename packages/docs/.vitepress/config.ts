import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
import { link } from "fs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "faux-element",
  description: "一个基于Vue3的通用组件库",
  appearance: false, // 关闭 darkMode @todo 深色模式完成后打开
  base: "/faux-element/", // 部署到github时需要设置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "开始使用", link: "/get-started" },
      { text: "组件", link: "/components/button" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "指南",
        collapsed: false,
        items: [{ text: "快速开始", link: "/get-started" }],
      },
      {
        text: "基础组件",
        collapsed: false,
        items: [
          { text: "Button 按钮", link: "components/button" },
          { text: "Collapse 折叠面板", link: "components/collapse" },
          // { text: "Dropdown 下拉菜单", link: "components/dropdown" },
        ],
      },
      {
        text: "反馈组件",
        collapsed: false,
        items: [
          { text: "Alert 提示", link: "components/alert" },
          // { text: "Loading 加载", link: "components/loading" },
          // { text: "Message 消息提示", link: "components/message" },
          // { text: "MessageBox 消息弹出框", link: "components/messagebox" },
          // { text: "Notification 通知", link: "components/notification" },
          // { text: "Popconfirm 气泡确认框", link: "components/popconfirm" },
          { text: "Tooltip 文字提示", link: "components/tooltip" },
        ],
      },
      // {
      //   text: "表单组件",
      //   collapsed: false,
      //   items: [{ text: "暂无", link: "components/form" }],
      // },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/decideTB/faux-element" },
    // ],
  },

  //引入了 @vitepress-demo-preview/plugin 插件的两个模块，创建容器和markdown嵌入组件
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});
