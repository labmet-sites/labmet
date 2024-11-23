import styled from 'styled-components';
import labmetfrontal from '../../../../assets/img/labmetfrontal.jpg';
import anechoic2 from '../../../../assets/img/anechoic2.jpg';
import { theme } from '../../../../styles/theme';

export const FacilitiesStyled = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.background};
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;

  .facilities-container {
    overflow: hidden;
    position: relative;
    display: flex;
    width: 94%;
    height: 84%;
    margin-top: 30px;
    background-color: transparent;
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
        color: ${theme.colors.secondary};
        transition: 300ms;
      }

      &:hover {
        background-color: rgba(22, 48, 75, 0.3);
        cursor: pointer;

        :nth-child(1) {
          color: #ffffff;
          scale: 1.06;
        }
      }
    }

    .left {
      left: 0px;
      border-radius: 14px 0px 0px 14px;
    }

    .right {
      right: 0px;
      border-radius: 0px 14px 14px 0px;
    }

    .facilitie {
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      display: flex;
      background-color: #79b5e9;
      color: white;
      font-size: 30px;
      border-radius: 14px;
      position: absolute;
      top: 0;
      left: 0;

      h1 {
        margin-top: 24px;
        font-size: 38px;
        font-weight: 200;
        color: #ffffff;
      }

      h2 {
        margin-top: 6px;
        font-size: 24px;
        font-weight: 200;
      }
    }

    .sec-1 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url(${labmetfrontal});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      justify-content: center;
    }

    .sec-2 {
      background-image: url(${anechoic2});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      justify-content: center;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      position: relative;

      .sec-2-text {
        position: absolute;
        top: 60px;
        left: 120px;
        font-size: 20px;
        font-weight: 200;
        line-height: 1.2;
      }
    }
    .sec-3 {
      background-color: #c56cdb;
    }
    .sec-3 {
      background-color: #ddeb5f;
    }
  }
`;
