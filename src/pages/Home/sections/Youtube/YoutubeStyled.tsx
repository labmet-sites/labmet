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
    bottom: -130px;
  }

  .vid-1 {
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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

    .yt-card {
      width: 520px;
      height: 100%;
      position: absolute;
      right: 0px;
      top: 0px;
      border-radius: 20px;
      background-color: #5f5f5f;
    }

    .card-1 {
      border-radius: 0px 20px 20px 0px;
      background-image: url('https://i.ytimg.com/vi/eEJIbPNLuFw/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGBACGAYgATgBQAE=&rs=AOn4CLBGHuhC43SxBp5P9bnt0CnKjdGQiQ');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
  }
`;
