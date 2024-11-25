import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterStyled = styled.footer`
  width: 100%;
  height: 400px;
  background-color: ${theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
  position: relative;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer-logo {
      height: 140px;
    }

    h1,
    h2 {
      margin-top: 6px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      color: #7c7c7c;
      font-size: 22px;
    }

    h2 {
      letter-spacing: 1px;
    }
  }

  .meuvao {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: #cecece;
    font-size: 16px;
    text-decoration: none;
    transition: 300ms;

    &:hover {
      text-decoration: underline;
      scale: 1.02;
      color: #7c7c7c;
    }
  }

  .footerInfo {
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    right: 30px;

    p {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      color: #7c7c7c;
      margin-bottom: 20px;
    }
  }

  .footer-icons {
    position: absolute;
    bottom: 30px;
    right: 40px;

    a {
      width: max-content;
      height: max-content;
      * {
        font-size: 40px;
        color: #7c7c7c;
        margin: 0px 4px 0px 4px;
        transition: 300ms;
      }

      &:hover {
        * {
          scale: 1.02;
          color: ${theme.colors.primary};
        }
      }
    }
  }

  @media (max-width: 1500px) {
    height: 300px;
    clip-path: polygon(0 14%, 100% 0, 100% 100%, 0% 100%);

    .footer-content {
      .footer-logo {
        height: 100px;
      }

      h1,
      h2 {
        margin-top: 6px;
        font-size: 19px;
      }

      h2 {
        letter-spacing: 1px;
      }
    }

    .meuvao {
      bottom: 18px;
      left: 18px;
      font-size: 13px;
    }

    .footerInfo {
      right: 24px;

      p {
        font-size: 13px;
        margin-bottom: 14px;
      }
    }

    .footer-icons {
      bottom: 20px;
      right: 28px;

      a {
        * {
          font-size: 28px;
          margin: 0px 3px 0px 3px;
        }
      }
    }
  }
`;
