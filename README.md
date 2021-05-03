# 个性导航

可自定义的简洁纯前端静态导航

## 相关配置文件

config 文件夹内保存着导航的配置文件，详细用法请参考配置文件注释

### 导航全局配置文件

**navigation.config.tsx**

```typescript
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
  searchWebsite: true,
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
        let candidateWordUrl = `http://suggestqueries.google.com/complete/search?client=youtube&q=${searchValue}`;
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

```

### 导航网站配置文件

**website.config.ts**

```typescript
/**
 * 存储导航网站的容器
 * @param {string} name 网站名称
 * @param {string} icon 网站图标
 * @param {string} href 网站地址
 * @returns {array}
 */
interface websiteAddInterface {
  name: string;
  icon: string;
  href: string;
}

interface websiteSetInterface extends Set<any> {
  add: (name: websiteAddInterface) => any;
}
const websiteSet: websiteSetInterface = new Set();
/**
 * 测试网站1
 */
websiteSet.add({
  name: '慕课网1',
  icon: 'https://www.imooc.com/favicon.ico',
  href: 'https://www.imooc.com/',
});
/**
 * 测试网站2
 */
websiteSet.add({
  name: '慕课网2',
  icon: 'https://www.imooc.com/favicon.ico',
  href: 'https://www.imooc.com/',
});
/**
 * 测试网站3
 */
websiteSet.add({
  name: '慕课网3',
  icon: 'https://www.imooc.com/favicon.ico',
  href: 'https://www.imooc.com/',
});
/**
 * 测试网站4
 */
websiteSet.add({
  name: '慕课网4',
  icon: 'https://www.imooc.com/favicon.ico',
  href: 'https://www.imooc.com/',
});
/**
 * 测试网站5
 */
websiteSet.add({
  name: '慕课网5',
  icon: 'https://www.imooc.com/favicon.ico',
  href: 'https://www.imooc.com/',
});

/**
 * 导出最终生成的站点列表
 */
export const websiteList = Array.from(websiteSet);

```



## 安装部署

安装项目必须的依赖

```bash
$ yarn
```

运行测试服务器

```bash
$ yarn start
```

打包编译静态站点

```bash
$ yarn build
```

nginx配置文件

```nginx
server {
    listen 80;
    listen 443 ssl http2;
    server_name navigation.xxx.com;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /xxx/xxxroot/navigation.xxx.com;
        index  index.html index.htm;
    }
    #ssl配置
    ssl_certificate    /www/certxxx/xxx.com/fullchain.cer;
    ssl_certificate_key    /www/certxxx/xxx.com/xxx.com.key;
    ssl_trusted_certificate /www/certxxx/xxx.com/ca.cer;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000";
    error_page 497  https://$host$request_uri;

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}

```

