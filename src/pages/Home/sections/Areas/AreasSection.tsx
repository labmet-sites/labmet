import { AreasStyled } from './AreasStyled';
import logo from '../../../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';
import { Title } from '../../../../components/Title/Title';
import { theme } from '../../../../styles/theme';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';

export default function AreasSection() {
  // Desestruturando a visibilidade e a referência
  const { isVisible: isVisibleLeft, elementRef: leftRef } =
    useScrollAnimation(); // Para o lado esquerdo
  const { isVisible: isVisibleRight, elementRef: rightRef } =
    useScrollAnimation(); // Para o lado direito

  return (
    <AreasStyled>
      <img src={logo} className="areas-logo" />
      <Title $titleColor={theme.colors.primary}>ÁREAS DE ATUAÇÃO</Title>
      <div className="area-container">
        <div
          className={`left area-content ${isVisibleLeft ? 'visible' : ''}`}
          ref={leftRef} // Passa apenas a referência correta
        >
          <div className="cards">
            <div className="card-1"></div>
            <div className="card-2">
              <Link to="/servicos" className="area-name">
                Metrologia Industrial
              </Link>
            </div>
          </div>
          <div className="area-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link to="/servicos" className="services-link">
              Saiba mais
            </Link>
          </div>
        </div>
        <div
          className={`right area-content ${isVisibleRight ? 'visible' : ''}`}
          ref={rightRef} // Passa apenas a referência correta
        >
          <div className="cards">
            <div className="card-1"></div>
            <div className="card-right card-2">
              <Link to="/servicos" className="name-right">
                Consultoria e capacitação
              </Link>
            </div>
          </div>
          <div className="area-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link to="/servicos" className="services-link">
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </AreasStyled>
  );
}
