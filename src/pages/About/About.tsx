import Header from '../../components/Header/Header';
import MobileHeader from '../../components/MobileHeader/MobileHeader';
import { AboutStyles } from './AboutStyles';
import logo from '../../assets/svg/logo.svg';
import star from '../../assets/svg/star.svg';
import eye from '../../assets/svg/eye.svg';
import clipboard from '../../assets/svg/clipboard.svg';
import Footer from '../../components/Footer/Footer';

export default function About() {
  return (
    <AboutStyles>
      <Header />
      <MobileHeader />
      <div className="about-main">
        <div className="about-text">
          <div className="text-img" />
          <div className="text">
            <p>
              A finalidade do{' '}
              <strong>Laboratório de Metrologia (LABMET)</strong> de Campina
              Grande é promover a criação, o desenvolvimento e o aperfeiçoamento
              de atividades de referência em calibração de sistemas elétricos.
              Além disso, tem como objetivo o aprimoramento das atividades de
              pesquisa, ensino e extensão através da formação de recursos
              humanos a nível de graduação e pós-graduação, e capacitação para o
              desenvolvimento das áreas correlatas à metrologia aplicada aos
              sistemas elétricos.
            </p>
            <img src={logo} />
          </div>
        </div>
      </div>
      <div className="about-cards">
        <div className="card">
          <img src={clipboard} className="card-img" />
          <h1>Missão</h1>
          <h2>
            Oferecer soluções tecnológicas em metrologia tendo como pilares o
            planejamento, a qualidade, a inovação e a melhoria contínua,
            atendendo as necessidades dos clientes.
          </h2>
        </div>
        <div className="card">
          <img src={star} className="card-img" />
          <h1>Valores</h1>
          <h2>
            Profissionalismo; <br /> Qualidade;
            <br /> Compromisso;
            <br /> Confidencialidade;
            <br /> Ética;
            <br /> integridade;
            <br /> Respeito as pessoas.
          </h2>
        </div>
        <div className="card">
          <img src={eye} className="card-img" />
          <h1>Visão</h1>
          <h2>
            Ser reconhecido pelos clientes, colaboradores e academia como
            laboratório de referência na prestação de serviços metrológicos, por
            sua qualidade, eficiência e credibilidade.
          </h2>
        </div>
      </div>
      <Footer />
    </AboutStyles>
  );
}
