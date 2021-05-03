/**
 * 存储导航网站的容器
 * @param {string} name 网站名称
 * @param {string} icon 网站图标
 * @param {string} href 网站地址
 * @param {'fill' | 'contain' | 'cover' | 'none' | 'scale-down'} objectFit 图标对齐方式,默认cover,参考https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit
 * @param {'pc' | 'mobile' | 'both'} show 图标展示的设备端，默认为pc
 * @returns {array}
 */
interface websiteAddInterface {
  name: string;
  icon?: string;
  href: string;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  show?: 'pc' | 'mobile' | 'both';
}

interface websiteSetInterface extends Set<any> {
  add: (name: websiteAddInterface) => any;
}
const websiteSet: websiteSetInterface = new Set();

websiteSet.add({
  name: '掘金',
  icon: 'https://juejin.cn/favicon.ico',
  href: 'https://juejin.cn/',
  objectFit: 'none',
  show: 'pc',
});

websiteSet.add({
  name: '图灵社区',
  icon: 'https://www.ituring.com.cn/favicon.ico',
  href: 'https://www.ituring.com.cn/',
  objectFit: 'none',
});

websiteSet.add({
  name: '百度贴吧',
  icon: 'https://tb1.bdstatic.com/tb/favicon.ico',
  href: 'https://tieba.baidu.com/',
  objectFit: 'scale-down',
});

websiteSet.add({
  name: '微信公众平台',
  icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico',
  href: 'https://mp.weixin.qq.com/',
  objectFit: 'none',
});

websiteSet.add({
  name: 'Umi.js',
  icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  href: 'https://umijs.org/',
  objectFit: 'none',
});

websiteSet.add({
  name: '清欢的博客',
  icon: 'https://www.sothx.com/images/themes/Avatar.jpg',
  href: 'https://www.sothx.com/',
  objectFit: 'cover',
});

/**
 * 导出最终生成的站点列表
 */
export const websiteList = Array.from(websiteSet);
