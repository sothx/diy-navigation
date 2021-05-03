/**
 * 导航配置文件
 */
import React from 'react';
import bgImage from '@/assets/home/bg.jpg';
import { GoogleOutlined } from '@ant-design/icons';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import IconFont from '@/components/IconFont';
import jsonp from './jsonp';
interface globalSettingInterface {
  iconfont: string;
  header?: headerInterface;
  bgImage?: string;
  searchWebsite: boolean;
  showcandidateWord: boolean;
  searchEngine?: searchEngineInterface[];
}
interface headerInterface {
  name: string; // 站点名称
  icon: any; // 站点图标(32px*32px)
}
interface searchEngineInterface {
  name: string; // 搜索引擎名称
  key: string;
  // 搜索引擎图标
  icon: () => any;
  searchUrl: (searchValue: string) => string;
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
  searchWebsite: false,
  /**
   * 是否在搜索框输入搜索词的同时，展示对应搜索引擎的智能提示
   */
  showcandidateWord: true,
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
      key: 'baidu',
      icon: () => <IconFont type="iconbaidu" style={{ fontSize: '25px' }} />,
      searchUrl: (searchValue: string) => {
        const url = `https://www.baidu.com/s?wd=${searchValue}`;
        return url;
      },
      searchCandidateWord: async (searchValue: string) => {
        let candidateWordUrl = `https://suggestion.baidu.com/su?wd=${searchValue}`;
        const _jsonp: any = await jsonp(candidateWordUrl, {
          param: 'cb',
          name: 'cb',
        });
        if (_jsonp.s) {
          return _jsonp.s;
        } else {
          return [];
        }
      },
    },
    {
      name: '必应',
      key: 'bing',
      icon: () => <IconFont type="iconBing" style={{ fontSize: '25px' }} />,
      searchUrl: (searchValue: string) => {
        const url = `https://cn.bing.com/search?q=${searchValue}`;
        return url;
      },
      searchCandidateWord: async (searchValue: string) => {
        let candidateWordUrl = `https://api.bing.com/qsonhs.aspx?type=cb&q=${searchValue}`;
        let candidateWord: string[] = [];
        const _jsonp: any = await jsonp(candidateWordUrl, {
          param: 'cb',
          name: 'cb',
        });
        const { AS } = _jsonp;
        if (Object.keys(AS).length) {
          const { Results } = AS;
          if (Results && Results.length) {
            if (Results[0].Suggests && Results[0].Suggests.length) {
              Results[0].Suggests.map((v: any, i: number, a: any) => {
                candidateWord.push(v.Txt);
              });
              return candidateWord;
            } else {
              return [];
            }
          } else {
            return [];
          }
        } else {
          return [];
        }
      },
    },
    {
      name: '谷歌',
      key: 'google',
      icon: () => (
        <GoogleOutlined style={{ color: '#40a9ff', fontSize: '25px' }} />
      ),
      searchUrl: (searchValue: string) => {
        const url = `https://www.google.com.tw/search?q=${searchValue}`;
        return url;
      },
      searchCandidateWord: async (searchValue: string) => {
        let candidateWordUrl = `https://suggestqueries.google.com/complete/search?client=youtube&q=${searchValue}`;
        let candidateWord: string[] = [];
        const _jsonp: any = await jsonp(candidateWordUrl, {
          param: 'jsonp',
          name: 'cb',
        });
        if (_jsonp.length === 3) {
          _jsonp[1].map((v, i, a) => {
            if (v.length === 2) {
              candidateWord.push(v[0]);
            }
          });
          return candidateWord;
        } else {
          return [];
        }
      },
    },
  ],
};
