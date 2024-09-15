import Header from "../components/Header/Header";
import { AboutStyles } from "../styles/styled/SecondaryPages/AboutStyles";
import { theme } from "../styles/theme";

export default function About() {
  return (
    <AboutStyles>
      <Header bg="#fff" fontColor={theme.colors.primary}/>
      <div className="about-img"></div>
    </AboutStyles>
  );
}
