import styled from 'styled-components';
import room from "../../../assets/imgs/room.jpg";
import auditorio from '../../../assets/imgs/auditorio.png';
import lab_fisica from '../../../assets/imgs/lab_fisica.png';
import banner1 from '../../../assets/imgs/banner1.jpg';

export const Installations = styled.section`
  width: 100%;
  display: flex;
  height: max-content;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  padding: 0px 60px;

  .instalations-photos {
    width: 100%;
    height: 700px;
    margin-top: 50px;
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
        background-image: url(${room});
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
        height: 49%;
      }

      .first-img {
        background-image: url(${banner1});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }

      .down-imgs {
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
        }

        .auditorio {
          background-image: url(${auditorio});
          filter: brightness(74%);
        }

        .lab-fisica {
          background-image: url(${lab_fisica});
          filter: brightness(74%);
        }
      }
    }
  }
`;
