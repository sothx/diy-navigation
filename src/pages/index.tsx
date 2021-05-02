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
