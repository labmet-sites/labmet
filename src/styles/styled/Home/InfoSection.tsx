import styled from 'styled-components';
import { theme } from '../../theme';

export const InfoSection = styled.section`
  display: flex;
  width: 100%;
  height: max-content;
  background-color: ${theme.colors.default};
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 100px;
  padding-top: 70px;
  position: relative;

  .areas {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    position: relative;
    margin-top: 60px;

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
        opacity: 0.2;
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
        filter: brightness(82%);
      }

      .area-title {
        display: flex;
        width: max-content;
        height: max-content;
        padding: 14px 36px;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.default};
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
        color: ${theme.colors.primary};
        font-family: 'Kanit', sans-serif;
        font-size: 24px;
        font-weight: 300;
        letter-spacing: 1px;
        display: flex;
        text-align: justify;
        flex-direction: column;

        .more {
          width: 100%;
          justify-content: flex-end;
          margin-top: 4px;
          font-size: 20px;
          color: ${theme.colors.primary};
          font-family: 'Kanit', sans-serif;
          font-weight: 200;
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

  .bottom-triangle{
    width: 100%;
    position: absolute;
    bottom: -200px;
    right: 0px;
    z-index: 0;
    rotate: 3deg;
  }

  @media (max-width: 1550px) {
    padding-bottom: 60px;
    padding-top: 60px;

    .areas {
      margin-top: 40px;

      .area {
        margin: 0px 70px;

        .area-img {
          width: 360px;
          margin-bottom: 46px;
        }

        .area-title {
          padding: 10px 30px;
          font-size: 21px;
        }

        .title-1 {
          top: 184px;
          left: 310px;
        }

        .area-text {
          width: 360px;
          font-size: 18px;

          .more {
            margin-top: 3px;
            font-size: 16px;
          }
        }
      }

      .inverted-area {
        .area-img {
          margin-top: 50px;
        }

        .title-2 {
          left: -260px;
          bottom: 62px;
        }
      }
    }
  }
`;
