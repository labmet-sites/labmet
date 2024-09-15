import styled from 'styled-components';
import { theme } from '../../theme';

export const AboutStyles = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  background-color: ${theme.colors.primary};
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  .about-img {
    width: 100%;
    height: 720px;
    background-image: url('https://labmetfotos.s3.amazonaws.com/_MG_5034.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`;
