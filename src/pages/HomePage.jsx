// import hero
import Hero from "../components/layout/Hero";
import Products from "../components/_common/Products";
import PageTransition from "../components/animation/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Products />
    </PageTransition>
  );
};

export default Home;
