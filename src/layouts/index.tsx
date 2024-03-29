import React, { useState } from 'react';
import { IRouteComponentProps } from 'umi';
import { Layout, Image, Avatar, Menu, Dropdown, Input } from 'antd';
import {
  UserOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import * as indexStyles from './style';

import { globalSetting } from '../config/navigation.config';

const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;

const { Search } = Input;

export default function GlobalLayout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  const menu = (
    <Menu>
      <Menu.Item>个人中心</Menu.Item>
      <Menu.Item>个人设置</Menu.Item>
      <Menu.Item danger>退出登录</Menu.Item>
    </Menu>
  );

  const [current, setCurrent] = useState('mail');

  const onSearch = (value) => console.log(value);

  const handleClick = () => {};

  const { header: headerConfig } = globalSetting;

  return (
    <indexStyles.GlobalLayoutsStyle>
      <indexStyles.GlobalStyle></indexStyles.GlobalStyle>
      <Layout>
        {headerConfig ? (
          <Header
            id="header"
            style={{ position: 'fixed', zIndex: 1, width: '100%' }}
          >
            <div className="header-main-left">
              <div className="header-logo">
                <Image
                  height={32}
                  preview={false}
                  width={32}
                  src={headerConfig.icon}
                />
                <h1>{headerConfig.name}</h1>
              </div>
            </div>
            <div className="header-main-center"></div>
            <div className="header-main-right">
              {/* <Dropdown overlay={menu} placement="bottomRight">
                  <div className="user-card">
                    <div className="name">admin</div>
                    <Avatar size={32} icon={<UserOutlined />} />
                  </div>
                </Dropdown> */}
            </div>
          </Header>
        ) : null}
        <Content id="contentWrapper">{children}</Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </indexStyles.GlobalLayoutsStyle>
  );
}
