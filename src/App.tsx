import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Body>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/labmet" element={<Home />} />
          <Route path="/labmet/servicos" element={<Services />} />
          <Route path="/labmet/sobre" element={<About />} />
          <Route path="/labmet/contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Body>
  );
}

export default App;

const Body = styled.div`
  width: 100%;

  * {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;
