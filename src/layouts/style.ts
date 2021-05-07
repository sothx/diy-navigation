import styled, { createGlobalStyle } from 'styled-components';

import { globalSetting } from '../config/navigation.config';

const bgImage = globalSetting.bgImage || '';

export const GlobalStyle = createGlobalStyle`
    body{
      /* ${bgImage ? `background-image: url(${bgImage});` : null}
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment:fixed;
      height: 100%;
      width: 100%; */
    }
`;

export const GlobalLayoutsStyle = styled.div`
  width: 100%;
  height: 100%;
  .ant-layout {
    ${bgImage ? `background-image: url(${bgImage});` : null}
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100%;
    height: auto;
    width: 100%;
  }
  #header {
    box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
    transition: background 0.3s, width 0.2s;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: inherit;
      z-index: -1;
      filter: blur(5px);
      filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false); /* ie6-9*/
    }
    display: flex;
    /* background: inherit; */
    background-color: rgba(255, 255, 255, 0.1);
    .header-main-left {
      display: flex;
      min-width: 192px;
      .header-logo {
        cursor: pointer;
        img {
          display: inline-block;
        }
        h1 {
          display: inline-block;
          margin: 0 0 0 12px;
          font-weight: 400;
          font-size: 16px;
          vertical-align: top;
          color: rgba(0, 0, 0, 0.85);
        }
      }
    }
    .header-main-center {
      flex: 1 1 0%;
      .ant-menu-horizontal {
        border-bottom: 0;
        line-height: 47px;
      }
      /* .ant-menu{
        height:47px;
      } */
    }
    .header-main-right {
      .user-card {
        display: flex;
        cursor: pointer;
        flex-direction: row-reverse;
        align-items: center;
        .name {
          padding-left: 5px;
        }
      }
    }
  }
  #contentWrapper {
  }
`;
