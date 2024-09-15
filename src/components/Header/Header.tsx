import { HeaderStyles } from './HeaderStyles';
import logo from '../../assets/svg/labmet_s.svg';
import { Link } from 'react-router-dom';
import React from 'react';

interface HeaderProps {
  bg: string;
  fontColor: string;
}

const Header: React.FC<HeaderProps> = ({bg, fontColor}) => {
  return (
    <HeaderStyles bg={bg} fontColor={fontColor}>
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
};

export default Header;