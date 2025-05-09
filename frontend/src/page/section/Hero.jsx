import hero_image from "../../assets/image/hero-image.png";

const HeroSection = () => {
  return (
    <section className="bg-background text-primary">
      <div className="flex h-screen">
        <div className="w-1/2 flex flex-col justify-center items-start p-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Master Mathematics with Trusted Guides
          </h1>
          <p className="text-lg font-medium mb-8 text-secondary">
            Explore high-quality guidebooks designed to help students excel in
            school with ease and confidence.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 font-medium bg-primary text-white rounded-lg shadow hover:bg-success transition cursor-pointer">
              Browse Guides
            </button>
            <button className="px-6 py-3 font-medium bg-accent text-white rounded-lg shadow hover:opacity-90 transition cursor-pointer">
              Know Me
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={hero_image}
            alt="Hero showcasing guides"
            style={{
              filter: "drop-shadow(0 0 20px rgba(46, 204, 113, 0.6))",
              animation: "levitate 3s ease-in-out infinite",
            }}
            className="w-4/5 hero-image"
          />
        </div>
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
