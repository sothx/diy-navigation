import React from 'react';
import { IRouteComponentProps } from 'umi'
import { Layout, Image, Avatar,Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import * as indexStyles from './style';

const { Header, Footer, Sider, Content } = Layout;

export default function GlobalLayout({ children, location, route, history, match }: IRouteComponentProps) {

  const menu = (
    <Menu>
      <Menu.Item>
        个人中心
      </Menu.Item>
      <Menu.Item>
        个人设置
      </Menu.Item>
      <Menu.Item danger>
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <indexStyles.GlobalLayoutsStyle>
      <Layout>
        <Header id="header">
          <div className="header-main-left">
            <div className="header-logo">
              <Image
                height={32}
                width={32}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
              <h1>DIY Navigation</h1>
            </div>
          </div>
          <div className="header-main-center">
            <div>123</div>
          </div>
          <div className="header-main-right">
            <Dropdown overlay={menu} placement="bottomRight">
              <div className="user-card">
                <div className="name">admin</div>
                <Avatar size={32} icon={<UserOutlined />} />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content>{ children }</Content>
        <Footer>Footer</Footer>
      </Layout>
    </indexStyles.GlobalLayoutsStyle>
  )
}