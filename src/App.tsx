import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contaxt';

function App() {
  return (
    <Body>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Body>
  );
}

export default App;

const Body = styled.body`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  position: relative;

  * {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit', sans-serif;
    box-sizing: border-box;
    color: #fff;
  }
`;
