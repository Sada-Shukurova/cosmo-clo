import PageTransition from "../components/animation/PageTransition";
import AboutUs from "../components/AboutUs";
import HeroSmall from "../components/layout/HeroSmall";

const AboutPage = () => {
  return (
    <PageTransition>
      <HeroSmall heroTitle={"About Us"} />
      <AboutUs />
    </PageTransition>
  );
};

export default AboutPage;
