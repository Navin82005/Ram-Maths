import { BooksImage } from "../../../assets/vector";

const GuidesTopSection = () => {
  return (
    <div className="guides-container flex flex-col md:flex-row items-center justify-between p-8 pt-16 bg-gray-100">
      <div className="content-section text-center md:text-left md:w-1/2">
        <h1 className="text-4xl font-montserrat font-bold mb-4">
          Welcome to the Guides
        </h1>
        <p className="text-lg mb-6">
          Explore our comprehensive guides to enhance your knowledge and skills.
        </p>
        <button className="explore-button px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Explore Now
        </button>
      </div>
      <div className="image-section md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={BooksImage}
          alt="Rotating Guide"
          className="w-64 h-64 object-cover transform transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default GuidesTopSection;
