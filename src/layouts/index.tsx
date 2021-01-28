import React,{ useState } from 'react';
import { IRouteComponentProps } from 'umi'
import { Layout, Image, Avatar,Menu, Dropdown,Input } from 'antd';
import { UserOutlined,MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import * as indexStyles from './style';

const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;

const { Search } = Input;


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

  const [current, setCurrent] = useState('mail')

  const onSearch = value => console.log(value);
  
  const handleClick = () => {

  }

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
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                  Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                  Navigation Two
                </Menu.Item>
                <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                  <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                  <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                  </a>
                </Menu.Item>
              </Menu>
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