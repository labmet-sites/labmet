import { HeaderStyled } from './HeaderStyled';
import logo from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderStyled>
      <img src={logo} />
      <ul>
        <Link to="/" className="header-page">
          HOME
        </Link>
        <Link to="/sobre" className="header-page">
          SOBRE
        </Link>
        <Link to="/servicos" className="header-page">
          SERVIÇOS
        </Link>
        <Link to="/contato" className="header-page">
          CONTATO
        </Link>
      </ul>
    </HeaderStyled>
  );
}
