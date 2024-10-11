import styled from "styled-components";
import Main from "./sections/Main/Main";
import AreasSection from "./sections/Areas/AreasSection";
import FacilitiesSection from "./sections/Facilities/FacilitiesSection";
import YoutubeSection from "./sections/Youtube/YoutubeSection";
import InstaSection from "./sections/Insta/InstaSection";
import LocationSection from "./sections/Location/LocationSection";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <HomeContainer>
      <Main></Main>
      <AreasSection></AreasSection>
      <FacilitiesSection></FacilitiesSection>
      <YoutubeSection></YoutubeSection>
      <LocationSection></LocationSection>
      <InstaSection></InstaSection>
      <Footer />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  height: max-content;
  flex-direction: column;
`;
