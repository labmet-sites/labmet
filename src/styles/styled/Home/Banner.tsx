import styled, { keyframes } from 'styled-components';
import banner1 from '../../../assets/imgs/banner1.jpg';
import banner2 from '../../../assets/imgs/banner2.jpg';
import banner3 from '../../../assets/imgs/banner3.jpg';

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
    100% {  
        background-image: url(${banner1});  
    }  
`;

export const Banner = styled.div`
display: flex;
  width: 100vw;
  height: 94vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 5%,
    rgba(0, 0, 0, 0) 15%
  );
  animation: ${changeBg} 10s infinite;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0;
  z-index: 0;
  filter: brightness(60%);
`;
