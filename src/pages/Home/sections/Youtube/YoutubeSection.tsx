import { YoutubeStyled } from './YoutubeStyled';
import pci from '../../../../assets/img/pci.png';

export default function YoutubeSection() {
  return (
    <YoutubeStyled>
      <img className="pci" src={pci}></img>
      <div className="vid-1">
        <div className="under-div" />
        <div className="vid-1-content">
          {`
          Nosso Canal do YouTube apresenta atualmente três palestras que exploram temas essenciais no 
          densevolvimento da engenharia e suas tecnologias. Embora este seja o ponto de partida, nosso 
          objetivo é expandir continuamente essa biblioteca de conteúdos com novos materiais, para oferecer 
          uma formação cada vez mais completa e atualizada. Esses vídeos foram elaborados por especialistas 
          e trazem informações valiosas para quem deseja se aprofundar no campo. Acompanhe nosso canal e 
          fique atento às próximas atualizações!
        `}
          <a href="yotube.com" className="card-1"></a>
        </div>
      </div>
      <div className="vid-2 videos">
        <a className="card-2 yt-card"></a>
      </div>
      <div className="vid-3 videos">
        <a className="yt-card"></a>
      </div>
    </YoutubeStyled>
  );
}
