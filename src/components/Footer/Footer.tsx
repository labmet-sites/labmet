import { FooterStyled } from './FooterStyled';
import logo from '../../assets/svg/logo.svg';
import { FaInstagram } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
  return (
    <FooterStyled>
      <div className="footer-content">
        <img className="footer-logo" src={logo} />
        <h1>LABMET</h1>
        <h2>Laboratório de Metrologia</h2>
      </div>
      <div className="footerInfo">
        <p>Universidade Federal de Campina Grande - UFCG</p>
        <p>R. Aprígio Veloso, 882</p>
        <p>Campus Bodocongó, Bloco CJ</p>
        <p>Campina Grande - PB</p>
        <p>CEP: 58428-830</p>
      </div>
      <a
        className="meuvao"
        href="https://www.instagram.com/meuvao/"
        target="_blank"
      >
        Photos by @meuvao
      </a>
      <div className="footer-icons">
        <a href="mailto:labmet@dee.ufcg.edu.br" target="_blank">
          <AiOutlineMail />
        </a>
        <a
          href="https://www.linkedin.com/in/labmet-laborat%C3%B3rio-de-metrologia-da-ufcg-90b942211/"
          target="_blank"
        >
          <FiLinkedin />
        </a>
        <a href="https://www.instagram.com/labmetufcg/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </FooterStyled>
  );
}
