import React, { useState } from 'react';
import styles from './index.less';
import {
  Input,
  Card,
  message,
  Menu,
  Dropdown,
  Typography,
  Image,
  Avatar,
} from 'antd';

import {
  MainContainer,
  WebsizeCardList,
  WebSizeCardItem,
  WebCardList,
} from './style';

import { GoogleOutlined, SearchOutlined } from '@ant-design/icons';

import IconFont from '@/components/IconFont';

const { Meta } = Card;

const { Search } = Input;

const { Text, Link, Title } = Typography;

const onSearch = (value) => console.log(value);

const index = () => {
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

  const contentList: any = {
    tab1: (
      <>
        <WebsizeCardList>
          <Card className="card-item">
            <Avatar
              size="large"
              className="item-img"
              src="https://www.imooc.com/favicon.ico"
            />
            <Title level={5}>慕课网</Title>
            <Text type="secondary">高质量网课推荐</Text>
          </Card>
          <Card className="card-item">
            <Avatar
              size="large"
              className="item-img"
              src="https://www.huxiu.com/favicon.ico"
            />
            <Title level={5}>虎嗅网</Title>
            <Text type="secondary">科技媒体</Text>
          </Card>
          <Card className="card-item">
            <Avatar
              size="large"
              className="item-img"
              src="https://36kr.com/favicon.ico"
            />
            <Title level={5}>36kr</Title>
            <Text type="secondary">互联网创业资讯</Text>
          </Card>
          <Card className="card-item">
            <Avatar
              size="large"
              className="item-img"
              src="https://www.zhihu.com/favicon.ico"
            />
            <Title level={5}>知乎</Title>
            <Text type="secondary">有问题，就会有答案</Text>
          </Card>
          <Card className="card-item">
            <Avatar
              size="large"
              className="item-img"
              src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
            />
            <Title level={5}>慕课网</Title>
            <Text type="secondary">高质量网课推荐</Text>
          </Card>
          <Card className="card-item">
            <Avatar
              size="large"
              className="item-img"
              src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
            />
            <Title level={5}>慕课网</Title>
            <Text type="secondary">高质量网课推荐</Text>
          </Card>
          <Card className="card-item">
            <Avatar
              size="large"
              className="item-img"
              src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
            />
            <Title level={5}>慕课网</Title>
            <Text type="secondary">高质量网课推荐</Text>
          </Card>
          <Card className="card-item">
            <Avatar
              size="large"
              className="item-img"
              src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
            />
            <Title level={5}>慕课网</Title>
            <Text type="secondary">高质量网课推荐</Text>
          </Card>
        </WebsizeCardList>
      </>
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

  const [key, setKey]: any = useState('tab1');
  const [noTitleKey, setNoTitleKey] = useState('app');

  const onTabChange = (key: any, type: any) => {
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
        <IconFont type="iconBing" style={{ fontSize: '12px' }} />
        Bing
      </Menu.Item>
      <Menu.Item>
        <IconFont type="iconbaidu" style={{ fontSize: '12px' }} />
        百度
      </Menu.Item>
      <Menu.Item>
        <GoogleOutlined style={{ color: '#40a9ff' }} />
        Google
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <MainContainer>
        <Input
          placeholder=""
          allowClear
          className="serachInput"
          addonAfter={false}
          prefix={
            <Dropdown placement="bottomCenter" overlay={menu}>
              <IconFont type="iconBing" style={{ fontSize: '25px' }} />
            </Dropdown>
          }
          suffix={
            <SearchOutlined style={{ fontSize: '22px', color: '#7e7e7e' }} />
          }
          size="large"
        />
        <WebsizeCardList>
          <div className={`card-item`}>
            <Avatar
              size={50}
              className="item-img"
              src="https://www.imooc.com/favicon.ico"
            />
            <Text className="item-text">慕课网</Text>
          </div>
          <div className={`card-item`}>
            <Avatar
              size={50}
              className="item-img"
              src="https://www.imooc.com/favicon.ico"
            />
            <Text className="item-text">慕课网</Text>
          </div>
          <div className={`card-item`}>
            <Avatar
              size={50}
              className="item-img"
              src="https://www.imooc.com/favicon.ico"
            />
            <Text className="item-text">慕课网</Text>
          </div>
          <div className={`card-item`}>
            <Avatar
              size={50}
              className="item-img"
              src="https://www.imooc.com/favicon.ico"
            />
            <Text className="item-text">慕课网</Text>
          </div>
          <div className={`card-item`}>
            <Avatar
              size={50}
              className="item-img"
              src="https://www.imooc.com/favicon.ico"
            />
            <Text className="item-text">慕课网</Text>
          </div>
          <div className={`card-item`}>
            <Avatar
              size={50}
              className="item-img"
              src="https://www.imooc.com/favicon.ico"
            />
            <Text className="item-text">慕课网</Text>
          </div>
          <div className={`card-item`}>
            <Avatar
              size={50}
              className="item-img"
              src="https://www.imooc.com/favicon.ico"
            />
            <Text className="item-text">慕课网</Text>
          </div>
          <div className={`card-item`}>
            <Avatar
              size={50}
              className="item-img"
              src="https://www.imooc.com/favicon.ico"
            />
            <Text className="item-text">慕课网</Text>
          </div>
          <div className={`card-item`}>
            <Avatar
              size={50}
              className="item-img"
              src="https://www.imooc.com/favicon.ico"
            />
            <Text className="item-text">慕课网</Text>
          </div>
        </WebsizeCardList>
      </MainContainer>
    </>
  );
};

export default index;
