import React,{useState} from 'react';
import styles from './index.less';
import { Input, Card, message, Menu, Dropdown, Typography } from 'antd';

import { MainContainer } from './style';

import { GoogleOutlined } from '@ant-design/icons';

import IconFont from '@/components/IconFont';


const { Search } = Input;

const { Text, Link } = Typography;

const onSearch = value => console.log(value);


const index =  () => {

  const tabList = [
    {
      key: 'tab1',
      tab: '常用',
    },
    {
      key: 'tab2',
      tab: '游戏',
    },
  ];

  const contentList : any = {
    tab1: (
      <div>
        <div className="img-wrapper" style={{display: 'inline-block'}}>
          <img alt="" width="280" height="140" src="https://cdn.max-c.com/heybox/game/header/1468810_hDKT3.jpg" />
          <h3>鬼谷八荒</h3>
        </div>
        {/* <div className="img-wrapper" style={{display: 'inline-block'}}>
          <img alt="" width="280" height="140" src="https://cdn.max-c.com/heybox/game/header/1468810_hDKT3.jpg" />
          <h3>鬼谷八荒</h3>
        </div>
        <div className="img-wrapper" style={{display: 'inline-block'}}>
          <img alt="" width="280" height="140" src="https://cdn.max-c.com/heybox/game/header/1468810_hDKT3.jpg" />
          <h3>鬼谷八荒</h3>
        </div> */}
      </div>
    ),
    tab2: <p>content2</p>,
  };
  
  const tabListNoTitle = [
    {
      key: 'article',
      tab: 'article',
    },
    {
      key: 'app',
      tab: 'app',
    },
    {
      key: 'project',
      tab: 'project',
    },
  ];

  const [key, setKey] : any = useState('tab1');
  const [noTitleKey, setNoTitleKey] = useState('app');

  const onTabChange = (key:any, type:any) => {
    console.log(key, type);
    setKey(key);
  };

  const contentListNoTitle = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
  };

  const menu = (
    <Menu className="searchMenu">
      <Menu.Item>
      <IconFont
            type="iconbaidu"
            style={{ fontSize: '12px' }}
          />百度
      </Menu.Item>
      <Menu.Item>
        <GoogleOutlined style={{color: '#40a9ff'}} />Google
      </Menu.Item>
      <Menu.Item>
        <IconFont
            type="iconBing"
            style={{ fontSize: '12px' }}
          />Bing
      </Menu.Item>
    </Menu>
  );

  return (
    <>
    <MainContainer>
      <Search
        placeholder=""
        allowClear
        className="serachInput"
        enterButton="搜索网页"
          prefix={
            <Dropdown placement="bottomCenter" overlay={menu}>
              <GoogleOutlined onClick={() => { message.success('click ok') }} style={{color: '#40a9ff'}} />
            </Dropdown>
        }
        size="large"
        onSearch={onSearch}
        />
        <Card
          className="websizeCard"
          title="网站导航"
          extra={<a href="#">添加</a>}
          tabList={tabList}
          activeTabKey={key}
          onTabChange={key => {
            onTabChange(key, 'key');
          }}
        >
          {contentList[key]}
        </Card>
      </MainContainer>
    </>
  );
}

export default index;
