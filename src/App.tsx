import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import { theme } from './styles/theme';

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

const Body = styled.div`
  width: 100%;
  position: relative;
  background-color: ${theme.colors.default};

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;
