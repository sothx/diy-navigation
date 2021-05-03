import styled from 'styled-components';

export const MainContainer = styled.main`
  /* width:1300px; */
  width: 50%;
  min-width: 710px;
  margin: 0 auto;
  height: 100%;
  .serachInput {
    margin-top: 200px;
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

export const CandidateWordCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  .card-item {
    background-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 10px;
  }
  margin-bottom: 10px;
`;

export const WebsiteCardList = styled.div`
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
    cursor: pointer;
    /* align-items: center;
    margin-right:3%; */
    /* &:nth-child(5n){
      margin-right: calc(20% - 200px);
    } */
    .item-img {
      background-color: rgba(255, 255, 255, 0.7);
      margin-bottom: 10px;
      &.cover > img {
        object-fit: cover;
      }
      &.none > img {
        object-fit: none;
      }
      &.contain > img {
        object-fit: contain;
      }
      &.fill > img {
        object-fit: fill;
      }
      &.scale-down > img {
        object-fit: scale-down;
      }
      &.initial > img {
        object-fit: initial;
      }
      &.inherit > img {
        object-fit: inherit;
      }
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
