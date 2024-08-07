import styled, { keyframes } from 'styled-components';
import banner1 from '../../assets/imgs/banner1.jpg';
import banner2 from '../../assets/imgs/banner2.jpg';
import banner3 from '../../assets/imgs/banner3.jpg';

const changeBg = keyframes`
    0% {
        background-image: url(${banner1});
    }
    33% {
        background-image: url(${banner2});
    }
    66% {
        background-image: url(${banner3});
    }
`;

export const Banner = styled.section`
  width: 100vw;
  height: 92vh;
  align-items: center;
  justify-content: center;
  background-image: url(${banner1});
  animation: ${changeBg} 16s infinite;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(76%);
  position: relative;

  .banner-wave{
    width: 100%;
    position: absolute;
    bottom: 0px;
  }
`;
