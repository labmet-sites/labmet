import styled from 'styled-components';
import mainBg from '../../../../assets/img/anechoic1.jpg';
import { theme } from '../../../../styles/theme';

export const MainStyled = styled.section`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: antiquewhite;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  img {
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
    padding: 16px 28px;
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: 900;
    border-radius: 12px;
    transition: 300ms;
    font-size: 28px;

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.primary};
      color: #fff;
      scale: 1.04;
    }
  }
`;
