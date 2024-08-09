import styled from 'styled-components';
import { theme } from '../../theme';

export const Location = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  padding-top: 160px;
  position: relative;
  background-color: #eaeaea;
  clip-path: polygon(0 0, 100% 9%, 100% 100%, 0 100%);

  * {
    z-index: 99;
  }

  .location-map {
    width: 54%;
    position: absolute;
    z-index: 1;
    top: 24%;
    right: 2%;
    opacity: 0.5;
  }

  .location-content {
    display: flex;
    width: 80%;
    height: max-content;
    flex-direction: column;
    margin-top: 80px;

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
        background-color: ${theme.colors.primary};
        color: #fff;
        border-radius: 6px;
        transition: 300ms;
        &:hover {
          scale: 1.08;
        }
      }
    }
  }

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
  }
`;
