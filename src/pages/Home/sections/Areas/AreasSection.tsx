import { AreasStyled } from './AreasStyled';
import logo from '../../../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';

export default function AreasSection() {
  return (
    <AreasStyled>
      <img src={logo} className="areas-logo" />
      <div className="left area-content">
        <div className="cards">
          <div className="card-1"></div>
          <div className="card-2">
            <h1 className="area-name">Metrologia Industrial</h1>
          </div>
        </div>
        <div className="area-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Link to="/servicos" className="services-link">
            Saiba mais
          </Link>
        </div>
      </div>
      <div className="right area-content">
        <div className="cards">
          <div className="card-1"></div>
          <div className="card-right card-2">
            <h1 className="name-right">Consultoria e capacitação</h1>
          </div>
        </div>
        <div className="area-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Link to="/servicos" className="services-link">
            Saiba mais
          </Link>
        </div>
      </div>
    </AreasStyled>
  );
}
