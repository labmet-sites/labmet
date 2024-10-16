import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderStyled = styled.header`
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 96%;
  height: 56px;
  border-radius: 6px;
  background-color: #fff;

  img {
    height: 70%;
    position: absolute;
    left: 20px;
  }

  ul {
    width: 40%;
    height: 100%;
    position: absolute;
    right: 0px;
    background-color: ${theme.colors.primary};
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

      &:hover {
        cursor: pointer;
        scale: 1.04;
        border-color: #fff;
      }
    }
  }
`;
