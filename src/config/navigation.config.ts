import React from 'react';
import bgImage from '@/assets/home/bg.jpg';
import { GoogleOutlined } from '@ant-design/icons';
/**
 * 存储导航网站的容器
 */
interface globalSettingInterface {
  iconfont: string;
  header?: headerInterface;
  bgImage?: string;
  searchEngine?: searchEngine[];
}
interface headerInterface {
  name: string; // 站点名称
  icon: string; // 站点图标(32px*32px)
}
interface searchEngine {
  name: string; // 搜索引擎名称
  // 搜索引擎图标
  icon: {
    type: 'iconfont' | 'ant-design';
    name: any;
  };
  search: (searchValue: string) => string; //搜索规则
}
export const globalSetting: globalSettingInterface = {
  /**
   * 阿里图标库配置
   */
  iconfont: '//at.alicdn.com/t/font_2355089_sjuftthy5e.js',
  /**
   * 头部栏配置
   * 如不需要头部栏可以直接注释掉这部分
   */
  header: {
    // 站点名称
    name: '自定义导航',
    // 站点图标(32px*32px)
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  /**
   * 背景图片配置
   * 如不需要背景图片可以直接注释掉这部分
   */
  bgImage,
  /**
   * 搜索引擎配置
   */
  searchEngine: [
    {
      name: '百度',
      icon: {
        type: 'iconfont',
        name: 'iconbaidu',
      },
      search: (searchValue: string) => {
        const searchUrl = `https://www.baidu.com/s?wd=${searchValue}`;
        return searchUrl;
      },
    },
    {
      name: '必应',
      icon: {
        type: 'iconfont',
        name: 'iconBing',
      },
      search: (searchValue: string) => {
        const searchUrl = `https://cn.bing.com/search?q=${searchValue}`;
        return searchUrl;
      },
    },
    {
      name: '谷歌',
      icon: {
        type: 'ant-design',
        name: GoogleOutlined,
      },
      search: (searchValue: string) => {
        const searchUrl = `https://www.google.com.tw/search?q=${searchValue}`;
        return searchUrl;
      },
    },
  ],
};

/**
 * 存储导航网站的容器
 * @param {string} name 网站名称
 * @param {string} icon 网站图标
 * @param {string} href 网站地址
 * @returns {array}
 */
interface websizeAddInterface {
  name: string;
  icon: string;
  href: string;
}
export const websiteSet: websizeAddInterface[] = [
  {
    name: '慕课网',
    icon: 'https://www.imooc.com/favicon.ico',
    href: 'http://www.baidu.com',
  },
  {
    name: '慕课网',
    icon: 'https://www.imooc.com/favicon.ico',
    href: 'http://www.baidu.com',
  },
  {
    name: '慕课网',
    icon: 'https://www.imooc.com/favicon.ico',
    href: 'http://www.baidu.com',
  },
  {
    name: '慕课网',
    icon: 'https://www.imooc.com/favicon.ico',
    href: 'http://www.baidu.com',
  },
];
