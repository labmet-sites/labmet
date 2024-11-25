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

  @media (max-width: 1580px) {
    padding-top: 60px;
    height: max-content;

    .insta-posts {
      .insta-container {
        .insta-blur {
          border-radius: 14px;

          h5 {
            font-size: 28px;
          }

          :nth-child(2) {
            font-size: 62px;
          }
        }

        .insta-header,
        .insta-footer {
          height: 44px;
          padding: 0px 14px 0px 14px;
        }

        .insta-header {
          border-radius: 14px 14px 0px 0px;

          .insta-user {
            height: 30px;
            width: 30px;
            margin-right: 4px;
          }

          .user-name {
            font-size: 12px;
          }
        }

        .insta-footer {
          border-radius: 0px 0px 14px 14px;

          .left-icons {
            .icon-3 {
              font-size: 16px;
            }

            .insta-icon {
              margin-right: 4px;
            }
          }
          .insta-icon {
            font-size: 20px;
          }
        }

        .insta-img {
          width: 280px;
        }
      }
    }

    .insta-text {
      margin-top: 32px;
      font-size: 28px;
      letter-spacing: 1.2px;
    }

    .media-icons {
      margin-top: 18px;
      margin-bottom: 100px;

      a {
        * {
          font-size: 40px;
          margin: 0px 8px 0px 8px;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding-top: 50px;

    .insta-posts {
      .insta-container {
        .insta-blur {
          border-radius: 10px;

          h5 {
            font-size: 26px;
          }

          :nth-child(2) {
            font-size: 58px;
          }
        }

        .insta-header,
        .insta-footer {
          height: 38px;
          padding: 0px 10px 0px 10px;
        }

        .insta-header {
          border-radius: 10px 10px 0px 0px;

          .insta-user {
            height: 30px;
            width: 30px;
            margin-right: 4px;
          }

          .user-name {
            font-size: 11px;
          }
        }

        .insta-footer {
          border-radius: 0px 0px 10px 10px;

          .left-icons {
            .icon-3 {
              font-size: 14px;
            }

            .insta-icon {
              margin-right: 4px;
            }
          }
          .insta-icon {
            font-size: 18px;
          }
        }

        .insta-img {
          width: 220px;
        }
      }
    }

    .insta-text {
      margin-top: 28px;
      font-size: 21px;
      letter-spacing: 1px;
    }

    .media-icons {
      margin-top: 14px;
      margin-bottom: 80px;

      a {
        * {
          font-size: 32px;
          margin: 0px 6px 0px 6px;
        }
      }
    }
  }
`;
