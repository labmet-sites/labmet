import styled from 'styled-components';
import labmetfrontal from '../../../../assets/img/labmetfrontal.jpg';
import anechoic2 from '../../../../assets/img/anechoic2.jpg';
import anechoic3 from '../../../../assets/img/anechoic3.jpg';
import sala from '../../../../assets/img/sala.jpg';
import auditorio from '../../../../assets/img/auditorio.png';
import lab from '../../../../assets/img/lab_fisica.png';
import pessoas from '../../../../assets/img/pessoas.jpg';
import { theme } from '../../../../styles/theme';

export const FacilitiesStyled = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.background};
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
  position: relative;

  .dots {
    display: flex;
    margin-top: 20px;
    gap: 10px;
    z-index: 999;
    position: absolute;
    bottom: 40px;
    .dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: lightgray;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .dot.active {
      background-color: ${theme.colors.primary};
    }
  }
  .arrow {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    width: 50px;
    height: 100%;
    background-color: transparent;
    overflow-x: hidden;

    :nth-child(1) {
      font-size: 50px;
      border-radius: 8px;
      background-color: transparent;
      clip-path: circle(50%, 50%);
      transition: 200ms;
      &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        color: #ffffff;
        scale: 1.02;
      }
    }
  }

  .left {
    left: 12px;
    border-radius: 14px 0px 0px 14px;
  }

  .right {
    right: 12px;
    border-radius: 0px 14px 14px 0px;
  }

  .facilities-container {
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    width: 90%;
    height: 84%;
    margin-top: 30px;
    background-color: transparent;

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
        margin-top: 32px;
        font-size: 42px;
        font-weight: 300;
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
        font-weight: 300;
        line-height: 1.2;
      }
    }
    .sec-3 {
      .sec-3-content {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: white;
        * {
          color: ${theme.colors.primary};
        }
      }

      .sec-3-text {
        width: 80%;
        margin-top: 40px;
        font-size: 28px;
        font-weight: 200;
        text-align: justify;
        line-height: 1.2;

        span {
          font-weight: 500;
        }
      }

      .sec-3-img {
        width: 60%;
        height: 100%;
        background-image: url(${anechoic3});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }
    }

    .sec-4 {
      background-color: #fff;
      .sec-4-text {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 20px 20px 20px 20px;

        .texts {
          display: flex;
          flex-direction: column;
          align-items: center;
          h1 {
            color: ${theme.colors.primary};
          }

          h3 {
            margin-top: 20px;
            width: 100%;
            text-align: justify;
            color: ${theme.colors.primary};
            font-weight: 200;
            font-size: 24px;
            line-height: 1.2;

            span {
              font-weight: 500;
            }
          }
        }

        .sec-4-text-img {
          width: 100%;
          height: 64%;
          background-image: url(${pessoas});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          border-radius: 6px;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
      }

      .sec-4-imgs {
        width: 50%;
        height: 100%;
        padding: 10px 20px 10px 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .room-img,
        .lab-img,
        .aud-img {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          border-radius: 6px;
        }

        .room-img {
          width: 100%;
          height: 60%;
        }

        .lab-img,
        .aud-img {
          width: 48%;
          height: 38%;
        }

        .room-img {
          background-image: url(${sala});
        }

        .lab-img {
          background-image: url(${lab});
        }

        .aud-img {
          background-image: url(${auditorio});
        }
      }
    }
  }

  @media (max-width: 1280px) {
    padding-top: 30px;

    .dots {
      .dot {
        width: 14px;
        height: 164x;
      }
    }
    .arrow {
      width: 42px;

      :nth-child(1) {
        font-size: 40px;
        border-radius: 4px;
      }
    }

    .left {
      left: 10px;
    }

    .right {
      right: 10px;
    }

    .facilities-container {
      width: 84%;
      margin-top: 20px;

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
          margin-top: 32px;
          font-size: 42px;
          font-weight: 300;
          color: #ffffff;
        }

        h2 {
          margin-top: 6px;
          font-size: 24px;
          font-weight: 200;
        }
      }

      .sec-1 {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2)
          ),
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
          font-weight: 300;
          line-height: 1.2;
        }
      }
      .sec-3 {
        .sec-3-content {
          width: 40%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          background-color: white;
          * {
            color: ${theme.colors.primary};
          }
        }

        .sec-3-text {
          width: 80%;
          margin-top: 40px;
          font-size: 28px;
          font-weight: 200;
          text-align: justify;
          line-height: 1.2;

          span {
            font-weight: 500;
          }
        }

        .sec-3-img {
          width: 60%;
          height: 100%;
          background-image: url(${anechoic3});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
        }
      }

      .sec-4 {
        background-color: #fff;
        .sec-4-text {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px 20px 20px;

          .texts {
            display: flex;
            flex-direction: column;
            align-items: center;
            h1 {
              color: ${theme.colors.primary};
            }

            h3 {
              margin-top: 20px;
              width: 100%;
              text-align: justify;
              color: ${theme.colors.primary};
              font-weight: 200;
              font-size: 24px;
              line-height: 1.2;

              span {
                font-weight: 500;
              }
            }
          }

          .sec-4-text-img {
            width: 100%;
            height: 64%;
            background-image: url(${pessoas});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            border-radius: 6px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          }
        }

        .sec-4-imgs {
          width: 50%;
          height: 100%;
          padding: 10px 20px 10px 10px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .room-img,
          .lab-img,
          .aud-img {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            border-radius: 6px;
          }

          .room-img {
            width: 100%;
            height: 60%;
          }

          .lab-img,
          .aud-img {
            width: 48%;
            height: 38%;
          }

          .room-img {
            background-image: url(${sala});
          }

          .lab-img {
            background-image: url(${lab});
          }

          .aud-img {
            background-image: url(${auditorio});
          }
        }
      }
    }
  }
`;
