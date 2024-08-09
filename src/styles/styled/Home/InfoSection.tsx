import styled from 'styled-components';
import { theme } from '../../theme';

export const InfoSection = styled.section`
 display: flex;
  width: 100%;
  height: max-content;
  background-color: ${theme.colors.primary};
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
  padding-bottom: 270px;
  padding-top: 70px;

  .areas {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    position: relative;
    margin-top: 30px;

    .areas-bg {
      display: flex;
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
      display: flex;
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
        display: flex;
        width: max-content;
        height: max-content;
        padding: 14px 36px;
        background-color: #9ae2ff;
        color: #001449;
        font-family: 'Kanit', sans-serif;
        font-size: 26px;
        font-weight: 300;
        letter-spacing: 1px;
        position: absolute;
        z-index: 99;
        transition: 300ms;
        text-decoration: none;

        &:hover {
          cursor: pointer;
          scale: 1.06;
        }
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
        flex-direction: column;

        .more {
          width: 100%;
          justify-content: flex-end;
          margin-top: 4px;
          font-size: 20px;
          color: #fff;
          font-family: 'Kanit', sans-serif;
          font-weight: 100;
          text-decoration: underline 1px;
          transition: 300ms;

          &:hover {
            cursor: pointer;
            scale: 1.02;
          }
        }
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
