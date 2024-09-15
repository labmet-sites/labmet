import styled from 'styled-components';
import { theme } from '../../theme';
import labmet_placa from '../../../assets/imgs/labmet_placa.jpg';

export const Location = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 80px;
  position: relative;
  background-image: linear-gradient(to right top, #051937, #122547, #1e3258, #2a3f6a, #374d7c);
  clip-path: polygon(0 0, 100% 9%, 100% 100%, 0 100%);

  * {
    z-index: 99;
  }

  .location-image {
    width: 42%;
    height: 100%;
    background-image: url(${labmet_placa});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .location-content {
    width: 58%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .location-map {
      width: 44%;
      position: absolute;
      z-index: 1;
      top: 44%;
      right: 2%;
      opacity: 0.8;
    }

    .location-iframe-content {
      width: 100%;
      height: max-content;
      margin-top: 50px;
      box-sizing: border-box;
      padding-left: 100px;
      display: flex;
      flex-direction: column;
      .location-iframe {
        width: 600px;
        height: 400px;
      }

      .location-link {
        display: flex;
        width: 600px;
        justify-content: center;
        margin-top: 20px;

        :nth-child(1) {
          width: max-content;
          height: max-content;
          padding: 12px 30px;
          font-size: 22px;
          font-family: 'Kanit', sans-serif;
          font-weight: 700;
          text-decoration: none;
          background-color: ${theme.colors.default};
          color: ${theme.colors.primary};
          border-radius: 6px;
          transition: 300ms;
          &:hover {
            scale: 1.08;
            background-color: ${theme.colors.secondary};
            color: ${theme.colors.primary};
          }
        }
      }
    }
  }
  /* 

  @media (max-width: 1550px) {
    margin-top: 40px;
    padding-top: 120px;
    clip-path: polygon(0 0, 100% 7%, 100% 100%, 0 100%);

    .location-map {
      width: 54%;
      top: 24%;
    }

    .location-content {
      width: 90%;
      margin-top: 60px;

      .location-iframe {
        width: 540px;
        height: 360px;
      }

      .location-link {
        width: 540px;

        :nth-child(1) {
          padding: 12px 32px;
          font-size: 21px;
          border-radius: 4px;
        }
      }
    }
  } */
`;
