import logo from '../../assets/svg/logo.svg';
import { FooterStyles } from './FooterStyles';

export default function Footer() {
  return (
    <FooterStyles>
      <img className="footer-logo" src={logo} />
    </FooterStyles>
  );
}
