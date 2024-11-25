import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const MobileHeaderStyles = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${theme.colors.primary};
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;

  .header-logo-mobile {
    height: max-content;

    img {
      width: 50px;
      margin-right: 8px;
    }
  }

  .open-options {
    width: 38px;
    height: 30px;
    position: fixed;
    left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 300ms;

    .line-close-1,
    .line-close-2,
    .line-close-3,
    .line-open-1,
    .line-open-2,
    .line-open-3 {
      width: 100%;
      height: 6px;
      background-color: ${theme.colors.background};
      border-radius: 3px;
      transition: 300ms;
    }

    .line-open-1 {
      transform: rotate(-45deg);
      position: absolute;
      top: 40%;
      scale: 1.04;
    }
    .line-open-3 {
      transform: rotate(45deg);
      position: absolute;
      bottom: 40%;
      scale: 1.04;
    }
    .line-open-2 {
      background-color: ${theme.colors.primary};
    }

    &:hover {
      cursor: pointer;
    }
  }

  .close-side-div {
    transform: translateX(-100%);
  }

  .open-side-div {
    transform: translateX(0%);
  }

  .header-mobile-options {
    width: 80%;
    height: 100vh;
    position: fixed;
    top: 60px;
    left: 0px;
    background-color: ${theme.colors.primary};
    z-index: 999;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-top: 50px;
    position: absolute;
    transition: 300ms;

    .mobile-route-option {
      width: 94%;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.background};
      color: ${theme.colors.primary};
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 14px;
      text-decoration: none;
    }

    .bottom-logo {
      width: 90px;
      margin-top: 60px;
    }
  }

  @media (max-width: 1100px) {
    display: flex;
  }
`;
