// https://ant.design/components/icon-cn/#API

/**
 * example:
 *  <IconFont type="icon-ali-pay" style={{ fontSize: '16px', color: 'lightblue' }} />
 */
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2355089_sjuftthy5e.js',
});

export default IconFont;
