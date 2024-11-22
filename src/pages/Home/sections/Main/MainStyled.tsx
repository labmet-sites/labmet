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
    width: 36%;
    height: auto;
    margin-bottom: 10px;
  }

  title {
    font-size: 40px;
    letter-spacing: 3px;
    font-weight: 200;
    margin-bottom: 36px;
  }

  p {
    text-align: center;
    font-size: 26px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 28px;
    margin-bottom: 50px;
  }

  .about-button {
    background-color: #fff;
    padding: 16px 30px;
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: 700;
    border-radius: 12px;
    transition: 200ms;
    font-size: 26px;

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
`;
