"use client";

// import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./component/herosection";
import Services from "./component/services";
import Trusted from "./component/trusted";
import FeatureProduct from "./component/featureproduct";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
