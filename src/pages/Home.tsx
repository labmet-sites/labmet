import styled from 'styled-components';
import { MainSection } from '../styles/styled/MainSection';
import { Banner } from '../styles/styled/Banner';
import { InfoSection } from '../styles/styled/InfoSection';
import Header from '../components/Header/Header';
import wave from '../assets/svg/wave.svg';
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
      <InfoSection></InfoSection>
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
