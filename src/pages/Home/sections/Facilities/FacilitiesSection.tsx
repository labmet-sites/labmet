import { useState } from 'react';
import { Title } from '../../../../components/Title/Title';
import { theme } from '../../../../styles/theme';
import { FacilitiesStyled } from './FacilitiesStyled';
import { TbArrowBadgeLeft } from 'react-icons/tb';
import { TbArrowBadgeRight } from 'react-icons/tb';

export default function FacilitiesSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sections = ['1', '2', '3', '4'];

  const handleNavigation = (direction: any) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? sections.length - 1 : prevIndex - 1,
      );
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) =>
        prevIndex === sections.length - 1 ? 0 : prevIndex + 1,
      );
    }
  };

  return (
    <FacilitiesStyled>
      <Title $titleColor={theme.colors.primary}>Nossas Instalações </Title>
      <div className="facilities-container">
        <div
          className="facilitie sec-1"
          style={{
            transform: `translateX(${(0 - currentIndex) * 100}%)`,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <h1>VISTA FRONTAL</h1>
        </div>
        <div
          className="facilitie sec-2"
          style={{
            transform: `translateX(${(1 - currentIndex) * 100}%)`,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <h1>CÂMARA ANECOICA</h1>
          <h2>{`(interior)`}</h2>
          <h3 className="sec-2-text">
            Usada para conter reflexões sonoras <br /> e eletromagnéticas.
            Possui isolamento para <br /> fontes de ruídos externos, simulando{' '}
            <br />
            uma dimensão infinita.
          </h3>
        </div>
        <div
          className="facilitie sec-3"
          style={{
            transform: `translateX(${(2 - currentIndex) * 100}%)`,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <div className="sec-3-content">
            <h1>CÂMARA ANECOICA</h1>
            <h2>{`(exterior)`}</h2>
            <h3 className="sec-3-text">
              Uma <span>câmara anecoica</span> é um ambiente essencial em
              laboratórios de engenharia elétrica, especialmente em testes
              relacionados a acústica e eletromagnetismo. Sua principal função é
              simular um espaço sem eco, eliminando reflexões sonoras e
              eletromagnéticas, o que permite a realização de medições e
              experimentos de maneira controlada e precisa.
            </h3>
          </div>
          <div className="sec-3-img"></div>
        </div>
        <div
          className="facilitie sec-4"
          style={{
            transform: `translateX(${(3 - currentIndex) * 100}%)`,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <h2>Conteúdo da Seção 4</h2>
          <p>Texto ou outros elementos da seção 4.</p>
        </div>
        <div className="arrow left" onClick={() => handleNavigation('left')}>
          <TbArrowBadgeLeft />
        </div>
        <div className="arrow right" onClick={() => handleNavigation('right')}>
          <TbArrowBadgeRight />
        </div>
      </div>
    </FacilitiesStyled>
  );
}
