import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GuideCard = ({ guide }) => {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  if (!guide || typeof guide !== "object") return null;

  const {
    id,
    title = "Untitled",
    description = "No description available.",
    image,
    price = 0,
    isOff = false,
    offPercentage = 0,
    isInStock = false,
    stock = 0,
    grade = "N/A",
  } = guide;

  const originalPrice = isOff
    ? (price / (1 - offPercentage / 100)).toFixed(2)
    : null;

  const handleImageError = () => setImgError(true);

  const handleAddToCart = () => {
    if (!isInStock) return;
    console.log("Added to cart:", id);
    // Add actual cart logic here
  };

  const handleBuyNow = () => {
    if (!isInStock) return;
    console.log("Buying now:", id);
    // Add redirect to checkout or buy flow
  };

  const handleViewDetails = () => {
    if (id) navigate(`/guides/guide?id=${id}`);
  };

  return (
    <li className="p-4 flex flex-col md:flex-row bg-white rounded-xl shadow hover:shadow-md transition-all">
      {/* Guide Image */}
      <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0">
        <img
          src={
            !imgError && image
              ? image
              : "https://via.placeholder.com/200x200?text=No+Image"
          }
          alt={title}
          onError={handleImageError}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Guide Details */}
      <div className="flex flex-col justify-between p-4 w-full">
        <div>
          <div className="flex items-center text-center mb-2">
            <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
            {/* Grade */}
            <h3 className="bg-blue-100 ml-3 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
              Grade: {grade}
            </h3>
          </div>
          <p className="text-sm text-text-secondary mb-4">{description}</p>
        </div>

        {/* Price & Stock Info */}
        <div className="flex items-center justify-between mt-4 mb-4">
          <div className="text-lg font-semibold text-text-primary">
            ₹{price}
            {isOff && (
              <span className="ml-2 text-sm text-red-500 line-through">
                ₹{originalPrice}
              </span>
            )}
            {isInStock ? (
              <span className="text-green-600 ml-2 text-sm font-medium">
                Stock ({stock})
              </span>
            ) : (
              <span className="text-red-500 ml-3 text-sm font-medium">
                Out of Stock
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mt-2">
          <button
            onClick={handleAddToCart}
            disabled={!isInStock}
            className={`px-4 py-2 cursor-pointer text-sm rounded-sm transition text-white ${
              isInStock
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            disabled={!isInStock}
            className={`px-4 py-2 cursor-pointer text-sm rounded-sm transition text-white ${
              isInStock
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Buy Now
          </button>
          <button
            onClick={handleViewDetails}
            className="px-4 py-2 cursor-pointer text-sm border border-gray-400 text-gray-700 rounded-sm hover:bg-gray-100 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </li>
  );
};

export default GuideCard;
