import { YoutubeStyled } from './YoutubeStyled';
import pci from '../../../../assets/img/pci.png';

export default function YoutubeSection() {
  return (
    <YoutubeStyled>
      <img className="pci" src={pci}></img>
      <div className="vid-1">
        <div className="under-div" />
        <div className="vid-1-content">
          Nosso <strong>Canal do YouTube</strong> apresenta atualmente três
          palestras que exploram temas essenciais no densevolvimento da
          engenharia e suas tecnologias. Embora este seja o ponto de partida,
          nosso objetivo é expandir continuamente essa biblioteca de conteúdos
          com novos materiais, para oferecer uma formação cada vez mais completa
          e atualizada. Esses vídeos foram elaborados por especialistas e trazem
          informações valiosas para quem deseja se aprofundar no campo.
          Acompanhe nosso canal e fique atento às próximas atualizações!
          <iframe
            className="card-1"
            src="https://www.youtube.com/embed/eEJIbPNLuFw?si=jMO3DJK6jUD7NPyc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="vid-2 videos">
        <iframe
          className="card-2 yt-card"
          src="https://www.youtube.com/embed/HdezkinMU0I?si=Z6ASKU5TADa3484i"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="vid-3 videos">
        <iframe
          className="yt-card"
          src="https://www.youtube.com/embed/f9_uivq6Bz0?si=T341_L9fnEHvGlWj"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </YoutubeStyled>
  );
}
