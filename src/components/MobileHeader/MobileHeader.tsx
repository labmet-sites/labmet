import { MobileHeaderStyles } from './MobileHeaderStyles';
import logo from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MobileHeader() {
  const [openMobile, setOpenMobile] = useState<string>('close-side-div');
  const [line, setLine] = useState<string>('line-close');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMobileOptions = () => {
    if (isOpen) {
      setIsOpen(false);
      setOpenMobile('close-side-div');
      setLine('line-close');
    } else {
      setIsOpen(true);
      setOpenMobile('open-side-div');
      setLine('line-open');
    }
  };

  return (
    <MobileHeaderStyles>
      <Link className="header-logo-mobile" to="/">
        <img src={logo} />
      </Link>
      <div className="open-options" onClick={openMobileOptions}>
        <div className={`${line}-1`}></div>
        <div className={`${line}-2`}></div>
        <div className={`${line}-3`}></div>
      </div>
      <div className={`${openMobile} header-mobile-options`}>
        <Link
          className="mobile-route-option"
          to="/"
          onClick={() => {
            setOpenMobile('close-side-div');
            setLine('line-close');
          }}
        >
          HOME
        </Link>
        <Link
          className="mobile-route-option"
          to="/sobre"
          onClick={() => {
            setOpenMobile('close-side-div');
            setLine('line-close');
          }}
        >
          SOBRE
        </Link>
        <Link
          className="mobile-route-option"
          to="/servicos"
          onClick={() => {
            setOpenMobile('close-side-div');
            setLine('line-close');
          }}
        >
          SERVIÇOS
        </Link>
        <Link
          className="mobile-route-option"
          to="/contatos"
          onClick={() => {
            setOpenMobile('close-side-div');
            setLine('line-close');
          }}
        >
          CONTATOS
        </Link>

        <img className="bottom-logo" src={logo} />
      </div>
    </MobileHeaderStyles>
  );
}
