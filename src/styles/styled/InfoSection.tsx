import styled from 'styled-components';
import { theme } from '../theme';

export const InfoSection = styled.section`
  width: 100%;
  height: 96vh;
  background-color: ${theme.colors.primary};
  align-items: center;
  flex-direction: column;

  .info-title {
    color: #fff;
    font-size: 46px;
    margin-top: 70px;
    font-family: 'Kanit', sans-serif;
    font-weight: 200;
    letter-spacing: 3px;
    margin-bottom: 30px;
  }

  .areas {
    width: 100%;
    height: 100%;
    justify-content: space-between;
    position: relative;

    .areas-bg {
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 1;
      .areas-logo {
        width: 50%;
        opacity: 0.3;
      }
    }

    .area {
      width: max-content;
      height: 100%;
      flex-direction: column;
      align-items: center;
      position: relative;
      flex-direction: column;
      z-index: 99;
      margin: 0px 80px;

      .area-img {
        width: 520px;
        margin-bottom: 80px;
      }

      .area-title {
        width: max-content;
        height: max-content;
        padding: 14px 36px;
        background-color: #00b4fc;
        color: #001449;
        font-family: 'Kanit', sans-serif;
        font-size: 26px;
        font-weight: 300;
        letter-spacing: 1px;
        position: absolute;
        z-index: 99;
      }

      .title-1 {
        top: 270px;
        left: 420px;
      }

      .area-text {
        width: 520px;
        color: #fff;
        font-family: 'Kanit', sans-serif;
        font-size: 24px;
        font-weight: 200;
        letter-spacing: 1px;
        text-align: justify;
      }
    }

    .inverted-area {
      flex-direction: column-reverse;

      .area-img {
        margin-bottom: 90px;
        margin-top: 100px;
      }

      .title-2 {
        left: -300px;
        bottom: 110px;
      }
    }
  }
`;
