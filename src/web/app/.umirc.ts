import { defineConfig } from "@umijs/max";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: "@umijs/max",
  },
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "首页",
      path: "/home",
      component: "./Home",
    },
    {
      name: "权限演示",
      path: "/access",
      component: "./Access",
    },
    {
      name: " CRUD 示例",
      path: "/table",
      component: "./Table",
    },
    {
      name: "测试页面",
      path: "/testpage",
      component: "./testpage",
    },
    {
      name: "折线图",
      path: "/linechart",
      component: "./linechart",
    },
    {
      name: "折线图2",
      path: "/linechart2",
      component: "./linechart2",
    },
    {
      name: "主题-边框",
      path: "/theme-border",
      component: "./theme-border",
    },
  ],

  npmClient: "pnpm",
  plugins: ['@liangskyli/umijs-plugin-electron'],
  electron: {},
  tailwindcss: {},
});
