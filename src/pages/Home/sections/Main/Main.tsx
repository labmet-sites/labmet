import { MainStyled } from './MainStyled';
import labmetName from '../../../../assets/svg/labmet_name.svg';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <MainStyled>
      <img src={labmetName} />
      <title>Laboratório de Metrologia de Campina Grande</title>
      <p>
        A finalidade do Laboratório de Metrologia (LABMET) de Campina Grande é
        promover a criação,
        <br />o desenvolvimento e o aperfeiçoamento de atividades de
        referênciaem calibração de sistemas elétricos.
      </p>
      <Link className='about-button' to = "/sobre">SAIBA MAIS</Link>
    </MainStyled>
  );
}
