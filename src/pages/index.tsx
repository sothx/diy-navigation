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

import { globalSetting } from '../config/navigation.config';

import { websiteList } from '../config/website.config';

const { searchEngine } = globalSetting;

const { Meta } = Card;

const { Search } = Input;

const { Text, Link, Title } = Typography;

const onSearch = (value) => console.log(value);

const index = () => {
  const menu = (
    <Menu className="searchMenu">
      {searchEngine?.map((v, i, a) => {
        return (
          <Menu.Item>
            {v.icon && v.icon.type === 'iconfont' ? (
              <IconFont type={v.icon.name} style={{ fontSize: '12px' }} />
            ) : null}
            {v.icon && v.icon.type === 'ant-design' ? v.icon.name() : null}
            {v.name}
          </Menu.Item>
        );
      })}
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
          {websiteList.map((v, i, a) => {
            return (
              <div className={`card-item`}>
                <Avatar size={50} className="item-img" src={v.icon} />
                <Text className="item-text">{v.name}</Text>
              </div>
            );
          })}
        </WebsizeCardList>
      </MainContainer>
    </>
  );
};

export default index;
