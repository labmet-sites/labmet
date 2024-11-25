import { InstaStyled } from './InstaStyled';
import logo from '../../../../assets/svg/logo.svg';
import insta1 from '../../../../assets/img/insta1.jpg';
import insta2 from '../../../../assets/img/insta2.jpg';
import insta3 from '../../../../assets/img/insta3.jpg';
import insta4 from '../../../../assets/img/insta4.jpeg';
import { IoMdHeart } from 'react-icons/io';
import { TbMessageCircleFilled } from 'react-icons/tb';
import { BsFillSendFill } from 'react-icons/bs';
import { MdBookmark } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { TiArrowForward } from 'react-icons/ti';

export default function InstaSection() {
  const insta_imgs = [
    {
      img: insta1,
      url: 'https://www.instagram.com/p/C9vDOLsvsQr/',
    },
    {
      img: insta2,
      url: 'https://www.instagram.com/p/C4O2kdaM3Nr/?img_index=1',
    },
    {
      img: insta3,
      url: 'https://www.instagram.com/p/DALl8FtRMCO/',
    },
    {
      img: insta4,
      url: 'https://www.instagram.com/p/DB1UCNYPF5O/',
    },
  ];

  return (
    <InstaStyled>
      <div className="insta-posts">
        {insta_imgs.map((i, index) => (
          <a
            className="insta-container"
            key={index}
            target="_blank"
            href={i.url}
          >
            <div className="insta-blur">
              <h5>Ir para o post</h5>
              <TiArrowForward />
            </div>
            <div className="insta-header">
              <div className="insta-user">
                <img className="user-logo" src={logo} alt="Logo" />
              </div>
              <h6 className="user-name">labmetufcg</h6>
            </div>
            <img
              className="insta-img"
              src={i.img}
              alt={`Instagram post ${i.img}`}
            />
            <div className="insta-footer">
              <div className="left-icons">
                <IoMdHeart className="icon-1 insta-icon" />
                <TbMessageCircleFilled className="icon-2 insta-icon" />
                <BsFillSendFill className="icon-3 insta-icon" />
              </div>
              <MdBookmark className="insta-icon" />
            </div>
          </a>
        ))}
      </div>
      <p className="insta-text">
        Nos acompanhe também em nossas redes sociais!
      </p>
      <div className="media-icons">
        <a href="https://www.instagram.com/labmetufcg/" target="_blank">
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/labmet-laborat%C3%B3rio-de-metrologia-da-ufcg-90b942211/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </InstaStyled>
  );
}
