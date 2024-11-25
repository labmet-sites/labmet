import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 96%;
  height: 56px;
  border-radius: 6px;
  background: linear-gradient(135deg, #ffffff 30%, ${theme.colors.primary} 30%);

  img {
    height: 70%;
    position: absolute;
    left: 20px;
  }

  ul {
    width: 70%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    right: 0px;
    background-color: transparent;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
    justify-content: flex-end;
    padding-right: 30px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    .header-page {
      margin-right: 60px;
      font-size: 20px;
      padding: 0px 2px 1px 2px;
      border-style: solid;
      border-bottom-width: 1px;
      border-color: transparent;
      transition: 200ms;
      text-decoration: none;
      font-weight: 300;
      color: #fff;

      &:hover {
        cursor: pointer;
        scale: 1.04;
        border-color: #fff;
      }
    }
  }

  @media (max-width: 1500px) {
    top: 22px;
    height: 48px;
    border-radius: 4px;

    img {
      height: 70%;
      position: absolute;
      left: 20px;
    }

    ul {
      padding-right: 20px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;

      .header-page {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;
