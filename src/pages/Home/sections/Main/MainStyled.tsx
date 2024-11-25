import styled from 'styled-components';
import mainBg from '../../../../assets/img/anechoic1.jpg';
import { theme } from '../../../../styles/theme';

export const MainStyled = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;

  .main-abbreviation {
    width: 600px;
    height: auto;
    margin-bottom: 10px;
  }

  .title {
    font-size: 32px;
    letter-spacing: 3px;
    font-weight: 200;
    margin-bottom: 36px;
    color: #fff;
  }

  p {
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 28px;
    margin-bottom: 50px;
    color: #fff;
  }

  .about-button {
    background-color: #fff;
    padding: 14px 28px;
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: 700;
    border-radius: 12px;
    transition: 200ms;
    font-size: 21px;

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.primary};
      color: #fff;
      scale: 1.04;
    }
  }

  .main-wave {
    width: 100%;
    z-index: 99;
    position: absolute;
    bottom: 0px;
  }

  @media (max-width: 1340px) {
    .main-abbreviation {
      width: 480px;
      margin-bottom: 6px;
    }

    .title {
      font-size: 28px;
    }

    p {
      font-size: 19px;
      margin-bottom: 30px;
    }

    .about-button {
      padding: 14px 24px;
      font-size: 19px;
    }
  }
`;
