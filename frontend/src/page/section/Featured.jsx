import book_stack from "../../assets/image/book-stack.png";

const FeaturedSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-6 bg-background">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={book_stack}
          alt="Guide Book"
          className="w-4/5 max-w-full h-auto rounded-lg"
        />
      </div>

      {/* Right Side: Details */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
        <h2 className="text-4xl font-bold text-primary mb-4">Hot Sales</h2>
        <p className="text-base text-secondary mb-6">
          +2 guide volume 2 is now available for sale. This guide is designed to
          help students excel in their studies with ease and confidence.
        </p>
        <button className="px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-success transition cursor-pointer">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default FeaturedSection;
