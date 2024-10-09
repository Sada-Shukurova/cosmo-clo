import PageTransition from "../components/animation/PageTransition";
import ContactUs from "../components/ContactUs";
import HeroSmall from "../components/layout/HeroSmall";

const ContactPage = () => {
  return (
    <PageTransition>
      <HeroSmall heroTitle={"Contact Us"} />
      <ContactUs />
    </PageTransition>
  );
};

export default ContactPage;
