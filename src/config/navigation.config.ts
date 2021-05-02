/**
 * 导航配置文件
 */
import React from 'react';
import bgImage from '@/assets/home/bg.jpg';
import { GoogleOutlined } from '@ant-design/icons';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
interface globalSettingInterface {
  iconfont: string;
  header?: headerInterface;
  bgImage?: string;
  searchWebsite: boolean;
  searchEngine?: searchEngineInterface[];
}
interface headerInterface {
  name: string; // 站点名称
  icon: any; // 站点图标(32px*32px)
}
interface searchEngineInterface {
  name: string; // 搜索引擎名称
  // 搜索引擎图标
  icon: {
    type: 'iconfont' | 'ant-design';
    name: any;
  };
  searchUrl: (searchValue: string) => Promise<string>;
  searchCandidateWord: (searchValue: string) => Promise<string[]>; //搜索规则
}
export const globalSetting: globalSettingInterface = {
  /**
   * @param {string} iconfont 阿里图标库配置
   */
  iconfont: '//at.alicdn.com/t/font_2355089_sjuftthy5e.js',
  /**
   * 头部栏配置
   * 如不需要头部栏可以直接注释掉这部分
   * @param {object} header 头部栏配置项
   * @param {string} header.name 站点名称
   * @param {*} header.icon 站点图标(32px*32px)
   */
  header: {
    name: '自定义导航',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  /**
   * 背景图片配置
   * 如不需要背景图片可以直接注释掉这部分
   */
  bgImage,
  /**
   * 是否在搜索框输入搜索词的同时，检索所有搜索站点
   */
  searchWebsite: true,
  /**
   * 搜索引擎配置
   * @param {string} name 名称
   * @param {string} icon 图标
   * @param {'iconfont' | 'ant-design'} icon.type 搜索引擎字体图标类型，只能是iconfont或ant-design
   * @param {*} icon.name 搜索引擎图标的名称，如果icon.type为iconfont,这里只能输入图标在iconfont图标库的名称,如果icon.type为ant-design，这里可以是ant-design内置图标的组件
   * @param {*} searchUrl 搜索引擎的搜索Url配置
   * @param {*} searchCandidateWord 搜索引擎的搜索智能提示配置(需要使用JSONP)
   */
  searchEngine: [
    {
      name: '百度',
      icon: {
        type: 'iconfont',
        name: 'iconbaidu',
      },
      searchUrl: async (searchValue: string) => {
        const url = `https://www.baidu.com/s?wd=${searchValue}`;
        return url;
      },
      searchCandidateWord: async (searchValue: string) => {
        const callback = 'callback';
        let candidateWordUrl = `https://suggestion.baidu.com/su?wd=${searchValue}&cb=${callback}`;
        let candidateWord: string[] = [];
        try {
          const candidateWordUrlResponse: any = await axios({
            url: candidateWordUrl,
            adapter: jsonpAdapter,
          });
          candidateWord = candidateWordUrlResponse.s;
        } catch (e) {
          candidateWord = [];
        }
        return candidateWord;
      },
    },
    {
      name: '必应',
      icon: {
        type: 'iconfont',
        name: 'iconBing',
      },
      searchUrl: async (searchValue: string) => {
        const url = `https://cn.bing.com/search?q=${searchValue}`;
        return url;
      },
      searchCandidateWord: async (searchValue: string) => {
        const callback = 'callback';
        let candidateWordUrl = `https://api.bing.com/qsonhs.aspx?type=cb&q=${searchValue}&cb=${callback}`;
        let candidateWord: string[] = [];
        try {
          const candidateWordUrlResponse: any = await axios({
            url: candidateWordUrl,
            adapter: jsonpAdapter,
          });
          candidateWord = [];
        } catch (e) {
          candidateWord = [];
        }
        return candidateWord;
      },
    },
    {
      name: '谷歌',
      icon: {
        type: 'ant-design',
        name: GoogleOutlined,
      },
      searchUrl: async (searchValue: string) => {
        const url = `https://www.google.com.tw/search?q=${searchValue}`;
        return url;
      },
      searchCandidateWord: async (searchValue: string) => {
        const callback = 'callback';
        let candidateWordUrl = `http://suggestqueries.google.com/complete/search?client=youtube&q=${searchValue}&jsonp=${callback}`;
        let candidateWord: string[] = [];
        try {
          const candidateWordUrlResponse: any = await axios({
            url: candidateWordUrl,
            adapter: jsonpAdapter,
          });
          candidateWord = [];
        } catch (e) {
          candidateWord = [];
        }
        return candidateWord;
      },
    },
  ],
};
