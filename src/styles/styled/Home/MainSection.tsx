import styled from 'styled-components';
import { theme } from '../../theme';

export const MainSection = styled.section`
  width: 100vw;
  height: 96vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .banner-wave {
    display: flex;
    width: 100%;
    position: absolute;
    bottom: 0px;
  }

  .labmet-sigla {
    width: 600px;
    margin-bottom: 10px;
    display: flex;
  }

  .labmet-name {
    display: flex;
    font-family: 'Kanit', sans-serif;
    font-weight: 200;
    font-size: 38px;
    color: #fff;
    letter-spacing: 3px;
    margin-bottom: 50px;
  }

  .labmet-text {
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
    font-size: 22px;
    color: #fff;
    letter-spacing: 3px;
    margin-bottom: 20px;
    text-align: center;
  }

  .about-link {
    display: flex;
    width: max-content;
    height: max-content;
    background-color: #fff;
    padding: 14px 34px;
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: 900;
    border-radius: 8px;
    transition: 300ms;
    font-size: 20px;

    &:hover {
      background-color: ${theme.colors.primary};
      color: #fff;
      scale: 1.06;
    }
  }

  @media (max-width: 1550px) {
    .labmet-sigla {
      width: 420px;
      margin-bottom: 6px;
    }

    .labmet-name {
      font-size: 28px;
      letter-spacing: 2px;
      margin-bottom: 30px;
    }

    .labmet-text {
      font-size: 18px;
      letter-spacing: 2px;
    }

    .about-link {
      padding: 12px 30px;
      border-radius: 6px;
      font-size: 18px;
    }
  }
`;
