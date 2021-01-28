import styled from 'styled-components';

export const GlobalLayoutsStyle = styled.div`
  #header{
    box-shadow: 0 1px 4px 0 rgba(0,21,41,.12);
    transition:background .3s,width .2s;
    z-index:10;
    display:flex;
    .header-main-left{
      display:flex;
      min-width:192px;
      .header-logo{
        cursor: pointer;
        img{
          display:inline-block;
        }
        h1{
          display:inline-block;
          margin:0 0 0 12px;
          font-weight:400;
          font-size:16px;
          vertical-align:top;
          color: rgba(0,0,0,.85);
        }
      }
    }
    .header-main-center{
      flex: 1 1 0%;
      .ant-menu-horizontal{
        border-bottom:0;
        line-height:47px;
      }
      /* .ant-menu{
        height:47px;
      } */
    }
    .header-main-right{
      .user-card{
        display:flex;
        cursor: pointer;
        flex-direction:row-reverse;
        align-items:center;
        .name{
          padding-left:5px;
        }
      }
    }
  }
`