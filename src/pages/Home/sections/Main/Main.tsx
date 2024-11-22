import { MainStyled } from './MainStyled';
import { Link } from 'react-router-dom';
import abbreviation from '../../../../assets/svg/abbreviation.svg';
import main_wave from '../../../../assets/svg/main_wave.svg';
import Header from '../../../../components/Header/Header';

export default function Main() {
  return (
    <MainStyled>
      <Header />
      <img className="main-abbreviation" src={abbreviation} />
      <h1 className="title">Laboratório de Metrologia de Campina Grande</h1>
      <p>
        A finalidade do Laboratório de Metrologia (LABMET) de Campina Grande é
        promover a criação,
        <br />o desenvolvimento e o aperfeiçoamento de atividades de
        referênciaem calibração de sistemas elétricos.
      </p>
      <Link className="about-button" to="/sobre">
        SAIBA MAIS
      </Link>
      <img className="main-wave" src={main_wave} />
    </MainStyled>
  );
}
