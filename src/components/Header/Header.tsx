import { HeaderStyles } from './HeaderStyles';
import logo from '../../assets/svg/labmet_s.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderStyles>
      <img className="header-logo" src={logo} alt="Header Logo" />
      <ul className="header-options">
        <Link className="option" to={'/'}>
          HOME
        </Link>
        <Link className="option" to={'/sobre'}>
          SOBRE
        </Link>
        <Link className="option" to={'/servicos'}>
          SERVIÇOS
        </Link>
        <Link className="option" to={'/contato'}>
          CONTATO
        </Link>
      </ul>
    </HeaderStyles>
  );
}
