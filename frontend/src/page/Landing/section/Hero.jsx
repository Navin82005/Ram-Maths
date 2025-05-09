import { Link } from "react-router-dom";
import hero_image from "../../../assets/image/hero-image.png";

const HeroSection = () => {
  return (
    <section className="bg-background flex flex-col-reverse md:flex-row text-text-primary pt-16">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start m-auto p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight">
          Master Mathematics with Trusted Guides
        </h1>
        <p className="text-base md:text-lg font-medium mb-6 md:mb-8 text-text-secondary">
          Explore high-quality guidebooks designed to help students excel in
          school with ease and confidence.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link
            to={"/guides"}
            className="px-6 py-3 font-medium bg-primary text-white rounded-lg shadow hover:bg-success transition cursor-pointer text-center"
          >
            Browse Guides
          </Link>
          <button className="px-6 py-3 font-medium bg-accent text-white rounded-lg shadow hover:opacity-90 transition cursor-pointer text-center">
            Know Me
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center m-auto mb-6 md:mb-auto">
        <img
          src={hero_image}
          alt="Hero showcasing guides"
          style={{
            filter: "drop-shadow(0 0 20px rgba(46, 204, 113, 0.6))",
            animation: "levitate 3s ease-in-out infinite",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
          className="w-3/4 md:w-4/5 hero-image"
        />
      </div>
      <style jsx>{`
        @keyframes levitate {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
