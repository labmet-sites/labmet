import styled from 'styled-components';
import { MainSection } from '../styles/styled/Home/MainSection';
import { Banner } from '../styles/styled/Home/Banner';
import { InfoSection } from '../styles/styled/Home/InfoSection';
import { Location } from '../styles/styled/Home/Location';
import Header from '../components/Header/Header';
import wave from '../assets/svg/wave.svg';
import logo from '../assets/svg/logo.svg';
import metrology from '../assets/imgs/metrology.png';
import capacitacao from '../assets/imgs/capacitacao.jpg';
import labmetName from '../assets/svg/labmet_name.svg';
import pb_map from '../assets/svg/pb_map.svg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <HomeStyles>
      <Header />
      <Banner />
      <MainSection>
        <img className="labmet-sigla" src={labmetName}></img>
        <h6 className="labmet-name">
          Laboratório de Metrologia de Campina Grande
        </h6>
        <h6 className="labmet-text">
          A finalidade do Laboratório de Metrologia (LABMET) de Campina Grande é
          promover a criação,
          <br />o desenvolvimento e o aperfeiçoamento de atividades de
          referência em calibração de sistemas elétricos.
        </h6>
        <Link to="/sobre" className="about-link">
          SAIBA MAIS
        </Link>
        <img className="banner-wave" src={wave} />
      </MainSection>
      <InfoSection>
        <p className="info-title">ÁREAS DE ATUAÇÃO</p>
        <ul className="areas">
          <div className="areas-bg">
            <img className="areas-logo" src={logo} />
          </div>
          <li className="area">
            <img className="area-img" src={metrology} />
            <Link to="/metrologia" className="title-1 area-title">
              Metrologia Industrial
            </Link>
            <h5 className="area-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
              <Link to="/metrologia" className="more">
                Saiba mais
              </Link>
            </h5>
          </li>
          <li className="area inverted-area">
            <img className="area-img" src={capacitacao} />
            <Link to="/consultoria" className="title-2 area-title">
              Consultoria e Capacitação
            </Link>
            <h5 className="area-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
              <Link to="/consultoria" className="more">
                Saiba mais
              </Link>
            </h5>
          </li>
        </ul>
      </InfoSection>
      <Location>
        <img className='location-map' src={pb_map} />
        <p className="location-title">LOCALIZAÇÃO</p>
        <div className='location-content'>
        <iframe className='location-iframe'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.254097466703!2d-35.910861924089886!3d-7.211827870807712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1f6fa71a700f%3A0xcb0d0fdae2dd2b65!2sLaborat%C3%B3rio%20de%20Metrologia%20(LABMET%20UFCG)!5e0!3m2!1spt-BR!2sbr!4v1723124578278!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
        <div className='location-link'>
        <a href='https://maps.app.goo.gl/rr1XLSKxGn1Tg9Ja6' target='_blank'>Google Maps</a>
        </div>
        </div>
      </Location>
    </HomeStyles>
  );
}

const HomeStyles = styled.div`
  width: 100vw;
  height: max-content;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
