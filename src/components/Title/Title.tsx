import styled from 'styled-components';

export const Title = styled.h1<{ $titleColor?: string }>`
  color: ${(props) => props.$titleColor || '#fff'} !important;
  font-size: 46px;
  font-family: 'Kanit', sans-serif;
  font-weight: 200;
  letter-spacing: 3px;

  @media (max-width: 1580px) {
    font-size: 36px;
  }
`;
