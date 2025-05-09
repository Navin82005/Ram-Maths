import FeaturedSection from "./section/Featured";
import FooterSection from "./section/Footer";
import HeroSection from "./section/Hero";
import YoutubePromoSection from "./section/Youtube";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <YoutubePromoSection />
      <FooterSection />
    </div>
  );
};

export default Landing;
