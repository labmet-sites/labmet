import styled from 'styled-components';
import auditorio from '../../../assets/imgs/auditorio.png';
import lab_fisica from '../../../assets/imgs/lab_fisica.png';

export const Installations = styled.section`
  width: 100%;
  display: flex;
  height: max-content;
  flex-direction: column;
  align-items: center;
  padding: 60px 60px;
  background-color: #eaeaea;

  .instalations-photos {
    width: 100%;
    height: 700px;
    margin-top: 110px;
    display: flex;

    .photos-left {
      display: flex;
      width: 44%;
      height: 100%;
      margin-right: 10px;
      flex-direction: column;
      justify-content: space-between;

      .left-text {
        strong {
          font-weight: 700;
        }
        display: block;
        font-family: 'Kanit', sans-serif;
        font-size: 20px;
        font-weight: 300;
        letter-spacing: 1px;
        text-align: justify;
      }

      .big-image {
        width: 100%;
        height: 74%;
        background-image: url('https://labmetfotos.s3.amazonaws.com/_MG_5009.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        border-radius: 6px;
      }
    }

    .photos-right {
      display: flex;
      width: 56%;
      height: 100%;
      margin-left: 10px;
      flex-direction: column;
      justify-content: space-between;

      .first-img,
      .down-imgs {
        width: 100%;
        font-weight: 600;
      }

      .first-img {
        height: 62%;
        background-image: url('https://labmetfotos.s3.amazonaws.com/_MG_5063.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        border-radius: 8px;
        .first-img-content {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Kanit', sans-serif;
          font-size: 36px;
          font-weight: 400;
          color: #fff;
          text-decoration: underline 1px;
          transition: 300ms;
          opacity: 0;
          background-color: rgba(0, 0, 0, 0.4);
        }

        &:hover {
          .first-img-content {
            opacity: 1;
          }
        }
      }

      .down-imgs {
        height: 37%;
        display: flex;
        justify-content: space-between;

        .auditorio,
        .lab-fisica {
          width: 49%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Kanit', sans-serif;
          color: transparent;
          transition: 300ms;

          .down-imgs-content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-family: 'Kanit', sans-serif;
            color: #fff;
            transition: 300ms;
            opacity: 0;
            background-color: rgba(0, 0, 0, 0.65);

            .down-img-title {
              font-size: 22px;
              font-weight: 600;
              text-decoration: underline 1px;
            }
            .down-img-text {
              width: 90%;
              margin-top: 10px;
              text-decoration: none;
              font-size: 16px;
              font-weight: 600;
              text-align: center;
              letter-spacing: 1px;
            }
          }

          &:hover {
            .down-imgs-content {
              opacity: 1;
            }
          }
        }

        .auditorio {
          background-image: url(${auditorio});
        }

        .lab-fisica {
          background-image: url(${lab_fisica});
        }
      }
    }
  }

  @media (max-width: 1550px) {
    padding: 40px 30px;

    .instalations-photos {
      width: 100%;
      height: 500px;
      margin-top: 80px;
      margin-bottom: 30px;

      .photos-left {
        margin-right: 2px;

        .left-text {
          strong {
            font-weight: 700;
          }
          font-size: 16px;
        }

        .big-image {
          height: 76%;
          border-radius: 4px;
        }
      }

      .photos-right {
        margin-left: 8px;

        .first-img {
          border-radius: 4px;
          .first-img-content {
            font-size: 28px;
          }
        }

        .down-imgs {
          .auditorio,
          .lab-fisica {
            width: 49.5%;

            .down-imgs-content {
              .down-img-title {
                font-size: 21px;
                text-decoration: underline 1px;
              }
              .down-img-text {
                margin-top: 6px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
`;
