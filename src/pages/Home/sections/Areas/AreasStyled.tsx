import styled, { keyframes } from 'styled-components';
import { theme } from '../../../../styles/theme';
import metrology from '../../../../assets/img/metrology.png';
import consultancy from '../../../../assets/img/consultancy.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AreasStyled = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.background};
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;

  .areas-logo {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 46%;
    opacity: 0.3;
  }

  .area-container {
    display: flex;
    margin-top: 80px;
    width: 100%;
    height: 60%;
    .area-content {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      z-index: 999;

      opacity: 0;
      transform: translateY(100px);
      transition:
        opacity 0.6s ease-out,
        transform 0.6s ease-out;
      &.visible {
        animation: ${fadeIn} 1.6s forwards;
      }

      .cards {
        display: flex;
        width: 420px;
        height: 280px;
        background-color: pink;
        position: relative;

        .card-1,
        .card-2 {
          width: 100%;
          height: 100%;
          position: absolute;
        }

        .card-1 {
          z-index: 10;
          background-color: transparent;
          border: 6px solid ${theme.colors.primary};
          bottom: 40px;
          right: 40px;
        }

        .card-2 {
          z-index: 20;
          background-image: url(${metrology});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;

          .name-right,
          .area-name {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 56px;
            background-color: ${theme.colors.primary};
            position: absolute;
            bottom: 12%;
            font-size: 24px;
            letter-spacing: 1px;
            font-weight: 300;
            text-decoration: none;
            transition: 200ms;
            color: #fff;

            &:hover {
              cursor: pointer;
              scale: 1.02;
            }
          }

          .area-name {
            left: 72%;
          }
        }
      }

      .area-text {
        width: 420px;
        display: flex;
        height: max-content;
        text-align: justify;
        flex-direction: column;
        align-items: flex-start;

        p {
          color: ${theme.colors.primary};
          font-size: 22px;
          font-weight: 300;
          line-height: 24px;
        }
        .services-link {
          font-size: 16px;
          color: #7b7b7b;
          text-decoration: underline;
          font-weight: 300;
          transition: 200ms;

          &:hover {
            cursor: pointer;
            scale: 1.04;
          }
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column-reverse;

      .cards {
        .card-1 {
          left: 40px;
          bottom: -40px;
        }

        .card-right {
          z-index: 20;
          background-image: url(${consultancy});

          .name-right {
            right: 72%;
          }
        }
      }
    }
  }
`;
