import { Title } from '../../../../components/Title/Title';
import { theme } from '../../../../styles/theme';
import { LocationStyled } from './LocationStyled';
import map_svg from '../../../../assets/svg/lab_map.svg';

export default function LocationSection() {
  return (
    <LocationStyled>
      <div className="labmet-location" />
      <div className="map">
        <Title $titleColor={theme.colors.primary}>LOCALIZAÇÃO</Title>
        <div className="map-content">
          <div className="map-container">
            <iframe
              className="map-frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11046.66945068184!2d-35.91611499726429!3d-7.213285985457474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1f6fa71a700f%3A0xcb0d0fdae2dd2b65!2sLaborat%C3%B3rio%20de%20Metrologia%20(LABMET%20UFCG)!5e1!3m2!1spt-BR!2sbr!4v1732473923659!5m2!1spt-BR!2sbr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <button className="map-button">Google Maps</button>
          </div>
        </div>
        <img className="maps-svg" src={map_svg} />
      </div>
    </LocationStyled>
  );
}
