import React,{useState} from 'react';
import styles from './index.less';
import { Input, Card, message, Menu, Dropdown, Typography } from 'antd';

import { MainContainer } from './style';

import { GoogleOutlined } from '@ant-design/icons';


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
    tab1: <p>content1</p>,
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
    <Menu>
      <Menu.Item>
        <GoogleOutlined style={{color: '#40a9ff'}} />百度搜索
      </Menu.Item>
      <Menu.Item>
        <GoogleOutlined style={{color: '#40a9ff'}} />谷歌搜索
      </Menu.Item>
      <Menu.Item>
        <Link href="https://ant.design" target="_blank"><GoogleOutlined style={{color: '#40a9ff'}} />必应搜索</Link>
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
        enterButton="百度搜索"
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
