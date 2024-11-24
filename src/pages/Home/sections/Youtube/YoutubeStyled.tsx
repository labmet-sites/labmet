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
    width: 800px;
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
`;
