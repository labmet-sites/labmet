import styled from 'styled-components';

export const FacilitiesStyled = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f0a3df;
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;

  .facilities-container {
    overflow: hidden;
    position: relative;
    display: flex;
    width: 94%;
    height: 80%;
    margin-top: 70px;
    .arrow {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999;
      width: 50px;
      height: 100%;
      transition: 300ms;
      background-color: transparent;
      overflow-x: hidden;

      :nth-child(1) {
        font-size: 44px;
        color: #000;
        transition: 300ms;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;

        :nth-child(1) {
          color: #ffffff;
          scale: 1.06;
        }
      }
    }

    .left {
      left: 0px;
      border-radius: 20px 0px 0px 20px;
    }

    .right {
      right: 0px;
      border-radius: 0px 20px 20px 0px;
    }

    .facilitie {
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #79b5e9;
      color: white;
      font-size: 30px;
      border-radius: 20px;
      position: absolute;
      top: 0;
      left: 0;
    }

    .sec-1 {
      background-color: #bd9494;
    }

    .sec-2 {
      background-color: #da8c58;
    }
    .sec-3 {
      background-color: #c56cdb;
    }
    .sec-3 {
      background-color: #ddeb5f;
    }
  }
`;
