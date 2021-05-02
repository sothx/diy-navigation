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
  name: '慕课网',
  icon: 'https://www.imooc.com/favicon.ico',
  href: 'http://www.baidu.com',
});
/**
 * 测试网站2
 */
websiteSet.add({
  name: '慕课网',
  icon: 'https://www.imooc.com/favicon.ico',
  href: 'http://www.baidu.com',
});
/**
 * 测试网站3
 */
websiteSet.add({
  name: '慕课网',
  icon: 'https://www.imooc.com/favicon.ico',
  href: 'http://www.baidu.com',
});
/**
 * 测试网站4
 */
websiteSet.add({
  name: '慕课网',
  icon: 'https://www.imooc.com/favicon.ico',
  href: 'http://www.baidu.com',
});
/**
 * 测试网站5
 */
websiteSet.add({
  name: '慕课网',
  icon: 'https://www.imooc.com/favicon.ico',
  href: 'http://www.baidu.com',
});

/**
 * 导出最终生成的站点列表
 */
export const websiteList = Array.from(websiteSet);
