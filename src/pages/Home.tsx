import styled from 'styled-components';
import { MainSection } from '../styles/styled/MainSection';
import { Banner } from '../styles/styled/Banner';
import { InfoSection } from '../styles/styled/InfoSection';
import Header from '../components/Header/Header';
import wave from '../assets/svg/wave.svg';
import logo from '../assets/svg/logo.svg';
import metrology from '../assets/imgs/metrology.png';
import capacitacao from '../assets/imgs/capacitacao.jpg';
import labmetName from '../assets/svg/labmet_name.svg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <HomeStyles>
      <Header />
      <Banner/>
      <MainSection>
        <img className="labmet-sigla" src={labmetName}></img>
        <h6 className="labmet-name">
          Laboratório de Metrologia de Campina Grande
        </h6>
        <h6 className='labmet-text'>
        A finalidade do Laboratório de Metrologia (LABMET) de Campina Grande é promover a criação, 
        <br/>
        o desenvolvimento e o aperfeiçoamento de atividades de referência em calibração de sistemas elétricos.
        </h6>
        <Link to="/sobre" className='about-link'>SAIBA MAIS</Link>
        <img className="banner-wave" src={wave} />
      </MainSection>
      <InfoSection>
        <p className='info-title'>ÁREAS DE ATUAÇÃO</p>
        <ul className='areas'>
          <div className='areas-bg'>
          <img className='areas-logo' src={logo}/>
          </div>
          <li className='area'>
            <img className='area-img' src={metrology}/>
            <h4 className='title-1 area-title'>Metrologia Industrial</h4>
            <h5 className='area-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book
            </h5>
          </li>
          <li className='area inverted-area'>
          <img className='area-img' src={capacitacao}/>
          <h4 className='title-2 area-title'>Consultoria e Capacitação</h4>
          <h5 className='area-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book
            </h5>
          </li>
        </ul>
      </InfoSection>
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
