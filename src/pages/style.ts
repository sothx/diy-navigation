import styled from 'styled-components';

export const MainContainer = styled.main`
  /* width:1300px; */
  width: 50%;
  min-width: 710px;
  margin: 0 auto;
  height: 100%;
  .serachInput {
    margin-top: 200px;
    margin-bottom: 80px;
    padding: 18px 15px;
    border-radius: 10px;
    .ant-input-clear-icon {
      font-size: 15px;
    }
    .ant-input-prefix {
      padding-right: 15px;
    }
  }
`;

export const WebsizeCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content:space-around; */
  .card-item {
    display: flex;
    width: 100px;
    flex-direction: column;
    margin-top: 50px;
    margin-right: calc(10% - 50px);
    margin-left: calc(10% - 50px);
    align-items: center;
    /* align-items: center;
    margin-right:3%; */
    /* &:nth-child(5n){
      margin-right: calc(20% - 200px);
    } */
    .item-img {
      background-color: rgba(255, 255, 255, 0.7);
      margin-bottom: 10px;
    }
    .item-text {
      color: white;
      text-shadow: 1px 1px 3px black;
    }
    /* background-color: rgba(255,255,255,0.6);
    flex-basis:22%;
    margin-right:3%;
    margin-bottom:15px;
    cursor: pointer;
    .item-img{
      margin-bottom:10px;
      background-color:rgba(255,255,255);
    } */
  }
`;

// export const WebSizeCardItem = styled.figure`
//   figcaption{

//   }
// `
