import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterStyles = styled.footer`
  display: flex;
  width: 100%;
  height: 180px;
  margin-top: 120px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};

  .footer-logo {
    width: 240px;
  }
`;
