import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface HeaderStylesProps {
  bg?: string;
  fontColor?: string;
}

export const HeaderStyles = styled.header<HeaderStylesProps>`
  display: flex;
  width: 88%;
  height: 52px;
  top: 30px;
  border-radius: 5px;
  align-items: center;
  justify-content: flex-end;
  z-index: 999;
  background-color: ${({ bg }) => bg || theme.colors.primary};
  position: absolute;
  border: 1px solid ${({ fontColor }) => fontColor || theme.colors.primary};

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
      padding: 0px 26px;
      text-decoration: none;
      color: ${({ fontColor }) => fontColor || theme.colors.primary};
      font-weight: 600;
      font-size: 16px;
      transition: 300ms;
      align-items: center;
      &:hover {
        background-color: ${({ fontColor }) =>
          fontColor || theme.colors.primary};
        color: ${({ bg }) => bg || theme.colors.primary};
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
