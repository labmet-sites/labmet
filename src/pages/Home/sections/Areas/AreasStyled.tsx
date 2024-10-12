import styled from 'styled-components';
import { theme } from '../../../../styles/theme';
import metrology from '../../../../assets/img/metrology.png';
import consultancy from '../../../../assets/img/consultancy.png';

export const AreasStyled = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.background};
  position: relative;

  .areas-logo {
    position: absolute;
    z-index: 0;
    width: 46%;
    opacity: 0.3;
  }

  .area-content {
    width: 50%;
    height: 60%;
    flex-direction: column;
    justify-content: space-between;
    z-index: 999;

    .cards {
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
          width: 100%;
          height: 56px;
          background-color: ${theme.colors.primary};
          position: absolute;
          bottom: 12%;
          font-size: 24px;
          letter-spacing: 1px;
          font-weight: 300;
        }

        .area-name {
          left: 72%;
        }
      }
    }

    .area-text {
      width: 420px;
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
    flex-direction: column-reverse;

    .cards {
      .card-1 {
        left: 40px;
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
`;
