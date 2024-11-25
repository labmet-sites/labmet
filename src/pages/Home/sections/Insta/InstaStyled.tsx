import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const InstaStyled = styled.section`
  width: 100%;
  height: 94vh;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;

  .insta-posts {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;

    .insta-container {
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: column;
      text-decoration: none;
      position: relative;
      text-decoration: none;
      transition: 300ms;

      .insta-blur {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 999;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        opacity: 0;
        transition: 300ms;

        h5 {
          color: #fff;
          font-size: 32px;
          font-family: 'Kanit', sans-serif;
          font-weight: 800;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }

        :nth-child(2) {
          color: #fff;
          font-size: 68px;
        }
      }

      .insta-header,
      .insta-footer {
        width: 100%;
        height: 50px;
        background-color: #fff;
        display: flex;
        align-items: center;
        padding: 0px 18px 0px 18px;
      }

      .insta-header {
        border-radius: 20px 20px 0px 0px;
        justify-content: flex-start;

        .insta-user {
          height: 31px;
          width: 31px;
          clip-path: circle(50% at 50% 50%);
          background-color: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 4px;

          .user-logo {
            width: 70%;
          }
        }

        .user-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 800;
          color: #818181;
        }
      }

      .insta-footer {
        border-radius: 0px 0px 20px 20px;
        justify-content: space-between;

        .left-icons {
          .icon-1 {
            color: #ff0000;
          }
          .icon-3 {
            font-size: 18px;
          }

          .insta-icon {
            margin-right: 6px;
          }
        }
        .insta-icon {
          font-size: 22px;
          color: #818181;
        }
      }

      .insta-img {
        width: 360px;
        background-color: #eb6e6e;
      }

      &:hover {
        .insta-blur {
          opacity: 1;
        }
      }
    }
  }

  .insta-text {
    color: #fff;
    margin-top: 40px;
    font-family: 'Montserrat', sans-serif;
    font-size: 34px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .media-icons {
    margin-top: 22px;

    a {
      * {
        color: #fff;
        font-size: 48px;
        margin: 0px 10px 0px 10px;
        transition: 300ms;

        &:hover {
          scale: 1.08;
        }
      }
    }
  }
`;
