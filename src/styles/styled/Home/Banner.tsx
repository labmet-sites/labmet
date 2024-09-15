import styled, { keyframes } from 'styled-components';

const banners = [
  'https://labmetfotos.s3.amazonaws.com/_MG_5037.jpg',
  'https://labmetfotos.s3.amazonaws.com/_MG_5063.jpg',
  'https://labmetfotos.s3.amazonaws.com/_MG_5055.jpg',
];

const changeBg = keyframes`  
    0% {  
        background-image: url(${banners[0]});  
    }  
    33% {  
        background-image: url(${banners[1]});  
    }  
    66% {   
        background-image: url(${banners[2]});  
    }  
    100% {  
        background-image: url(${banners[0]});  
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
  animation: ${changeBg} 20s infinite;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0;
  z-index: 0;
`;
