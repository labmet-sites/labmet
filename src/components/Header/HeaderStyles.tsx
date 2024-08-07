import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderStyles = styled.header`
  display: flex;
  width: 88%;
  height: 52px;
  top: 30px;
  border-radius: 3px;
  align-items: center;
  justify-content: flex-end;
  z-index: 999;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  position: absolute;

  .header-logo {
    height: 70%;
    position: absolute;
    left: 20px;
  }

  .header-options {
    display: flex;
    width: max-content;
    height: 100%;
    .option {
      display: flex;
      width: max-content;
      height: 100%;
      padding: 0px 26px;
      text-decoration: none;
      color: ${theme.colors.primary};
      font-weight: 600;
      font-size: 16px;
      transition: 300ms;
      align-items: center;
      &:hover {
        background-color: ${theme.colors.primary};
        color: #fff;
      }
    }
  }

  @media (max-width: 1550px) {
    height: 48px;

    .header-options {
      .option {
        font-size: 14px;
      }
    }
  }
`;
