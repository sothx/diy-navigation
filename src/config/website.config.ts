/**
 * 存储导航网站的容器
 * @param {string} name 网站名称
 * @param {string} icon 网站图标
 * @param {string} href 网站地址
 * @param {'fill' | 'contain' | 'cover' | 'none' | 'scale-down'} objectFit 图标对齐方式,默认cover,参考https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit
 * @returns {array}
 */
interface websiteAddInterface {
  name: string;
  icon: string;
  href: string;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

interface websiteSetInterface extends Set<any> {
  add: (name: websiteAddInterface) => any;
}
const websiteSet: websiteSetInterface = new Set();
/**
 * 测试网站1
 */
websiteSet.add({
  name: '图灵社区',
  icon: 'https://www.ituring.com.cn/favicon.ico',
  href: 'https://www.ituring.com.cn/',
  objectFit: 'none',
});
/**
 * 测试网站2
 */
websiteSet.add({
  name: '慕课网',
  icon: 'https://www.imooc.com/favicon.ico',
  href: 'https://www.imooc.com/',
  objectFit: 'cover',
});
/**
 * 测试网站3
 */
websiteSet.add({
  name: '小米商城',
  icon: 'https://www.mi.com/favicon.ico',
  href: 'https://www.mi.com/',
  objectFit: 'none',
});
/**
 * 测试网站4
 */
websiteSet.add({
  name: '掘金',
  icon: 'https://juejin.cn/favicon.ico',
  href: 'https://juejin.cn/',
  objectFit: 'none',
});
/**
 * 测试网站5
 */
websiteSet.add({
  name: 'Umi.js',
  icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  href: 'https://umijs.org/',
  objectFit: 'none',
});

/**
 * 导出最终生成的站点列表
 */
export const websiteList = Array.from(websiteSet);
