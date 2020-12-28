import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {

  },
  theme: {
    'layout-header-background': '#fff',
    'layout-header-height': '48px',
    'layout-header-padding': '0 16px'
  }
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
});
