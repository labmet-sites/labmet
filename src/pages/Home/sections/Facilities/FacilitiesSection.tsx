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
        {sections.map((item, index) => (
          <div
            key={index}
            className={`facilitie sec-${index + 1}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            {item}
          </div>
        ))}
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
