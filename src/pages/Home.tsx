import styled from 'styled-components';
import { Banner } from '../styles/styled/Banner';
import Header from '../components/Header/Header';
import wave from '../assets/svg/wave.svg';
import { InfoSection } from '../styles/styled/InfoSection';

export default function Home() {
  return (
    <HomeStyles>
      <Header />
      <Banner>
        <img className="banner-wave" src={wave} />
      </Banner>
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
