import styled from 'styled-components';
import labmet_placa from '../../../../assets/img/labmet_placa.jpg';
import { theme } from '../../../../styles/theme';

export const LocationStyled = styled.section`
  width: 100%;
  height: 760px;
  background-color: #80ec77;
  display: flex;

  .labmet-location {
    width: 44%;
    height: 100%;
    background-image: url(${labmet_placa});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .map {
    width: 56%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    position: relative;

    .map-content {
      width: 100%;
      height: 90%;
      padding-top: 30px;
      padding-left: 30px;
      z-index: 99;

      .map-container {
        width: max-content;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .map-frame {
          width: 580px;
          height: 380px;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        .map-button {
          background-color: ${theme.colors.primary};
          padding: 10px 26px;
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          border-radius: 14px;
          transition: 200ms;
          font-size: 28px;

          &:hover {
            cursor: pointer;
            background-color: #fff;
            color: ${theme.colors.primary};
            scale: 1.02;
          }
        }
      }
    }
  }

  .maps-svg {
    width: 80%;
    z-index: 1;
    position: absolute;
    bottom: 20px;
    right: 40px;
  }
`;
