import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const YoutubeStyled = styled.section`
  width: 100%;
  height: max-content;
  background-color: ${theme.colors.primary};
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .pci {
    width: 650px;
    position: absolute;
    z-index: 999;
    left: 0px;
    bottom: -80px;
  }

  .vid-1 {
    width: 90%;
    height: 320px;
    margin-bottom: 30px;
    position: relative;
    .under-div {
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.secondary};
      position: absolute;
      z-index: 1;
      border-radius: 20px;
      bottom: -50px;
      right: -50px;
    }
    .vid-1-content {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 20px 40px 40px 20px;
      position: relative;
      padding: 16px 540px 16px 22px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 23px;
      line-height: 1.6;
      text-align: justify;
      z-index: 2;
      box-shadow:
        rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

      .card-1 {
        width: 520px;
        height: 100%;
        position: absolute;
        right: 0px;
        top: 0px;
        border-radius: 20px;
        background-color: #5f5f5f;
        border-radius: 0px 20px 20px 0px;
        background-image: url('https://i.ytimg.com/vi/eEJIbPNLuFw/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGBACGAYgATgBQAE=&rs=AOn4CLBGHuhC43SxBp5P9bnt0CnKjdGQiQ');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }
    }
  }

  .vid-2 {
    right: 260px;
  }

  .videos {
    width: 90%;
    height: 320px;
    border-radius: 20px 40px 40px 20px;
    margin-bottom: 30px;
    position: relative;
    padding: 16px 540px 16px 22px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 23px;
    line-height: 1.6;
    text-align: justify;
    z-index: 99;

    .yt-card {
      width: 520px;
      height: 100%;
      position: absolute;
      right: 0px;
      top: 0px;
      border-radius: 20px;
      background-color: #5f5f5f;
    }
  }

  @media (max-width: 1580px) {
    .pci {
      width: 540px;
      bottom: -40px;
    }

    .vid-1 {
      height: 280px;
      margin: 24px;
      .under-div {
        border-radius: 12px;
        bottom: -42px;
        right: -42px;
      }
      .vid-1-content {
        border-radius: 12px 40px 40px 12px;
        padding: 12px 540px 12px 22px;
        font-size: 18px;
        line-height: 1.7;

        .card-1 {
          width: 520px;
          height: 100%;
          border-radius: 12px;
          border-radius: 0px 12px 12px 0px;
        }
      }
    }

    .vid-2 {
      right: 260px;
    }

    .videos {
      height: 290px;
      border-radius: 12px 40px 40px 12px;
      margin-bottom: 24px;

      .yt-card {
        border-radius: 12px;
      }
    }
  }

  @media (max-width: 1350px) {
    .pci {
      width: 480px;
      bottom: -10px;
    }

    .vid-1 {
      height: 260px;
      margin: 20px;
      .under-div {
        border-radius: 8px;
        bottom: -32px;
        right: -32px;
      }
      .vid-1-content {
        border-radius: 8px 40px 40px 8px;
        padding: 10px 500px 10px 22px;
        font-size: 16px;
        .card-1 {
          width: 480px;
          border-radius: 0px 8px 8px 0px;
        }
      }
    }

    .vid-2 {
      right: 220px;
    }

    .videos {
      height: 270px;
      border-radius: 8px 40px 40px 8px;
      margin-bottom: 20px;

      .yt-card {
        width: 480px;
        border-radius: 12px;
      }
    }
  }
`;
