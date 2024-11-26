import styled from 'styled-components';
import about from '../../assets/img/about.jpg';
import about2 from '../../assets/img/about2.jpg';
import { theme } from '../../styles/theme';

export const AboutStyles = styled.div`
  width: 100%;
  height: max-content;
  flex-direction: column;
  position: relative;
  display: flex;
  align-items: center;

  .about-main {
    width: 100%;
    height: 100vh;
    background-image: url(${about});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    display: flex;
    justify-content: center;

    .about-text {
      position: absolute;
      width: 1400px;
      height: 650px;
      background-color: #347bb9;
      bottom: -380px;
      display: flex;

      .text-img {
        width: 44%;
        height: 100%;
        background-image: url(${about2});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }

      .text {
        width: 56%;
        height: 100%;
        background-color: ${theme.colors.background};
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 40px 80px 40px 80px;

        p {
          font-family: 'Montserrat', sans-serif;
          font-size: 22px;
          font-weight: 300;
          text-align: justify;
          margin-bottom: 170px;
          line-height: 30px;
        }

        img {
          width: 120px;
        }
      }
    }
  }

  .about-cards {
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.primary};
    padding-top: 520px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 200px;

    .card {
      width: 320px;
      height: 440px;
      background-color: ${theme.colors.background};
      border-bottom-width: 16px;
      border-style: solid;
      border-color: #28f4f9;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      position: relative;
      padding: 60px 20px 0px 20px;
      text-align: center;
      margin-left: 50px;
      margin-right: 50px;

      h1 {
        position: absolute;
        top: -64px;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-size: 40px;
        font-weight: 800;
      }

      h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 22px;
        font-weight: 600;
        line-height: 32px;
        z-index: 99;
      }

      .card-img {
        position: absolute;
        z-index: 1;
        top: 40px;
        width: 330px;
      }
    }
  }
`;
