import { useEffect, useState } from "react";
import { BooksImage } from "../../../assets/vector";
import { fetchGuideDetails } from "../../../controller/guides.controller.mjs";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Package, ShoppingCart } from "lucide-react";

const GuideInfo = () => {
  const [guideDetails, setGuideDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { search } = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const guideId = queryParams.get("id");

    if (!guideId) return;

    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetchGuideDetails(guideId);
        if (!response.error) {
          setGuideDetails(response.data);
          console.log("Guide Details:", response.data);
        }
      } catch (error) {
        console.error("Error fetching guide details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [search]);

  const offerPrice = (price, offPercentage) => {
    if (
      !price ||
      !offPercentage ||
      offPercentage <= 0 ||
      offPercentage >= 100
    ) {
      return price?.toFixed(2);
    }
    const discountedPrice = price * (1 - offPercentage / 100);
    return discountedPrice.toFixed(2);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader" />
      </div>
    );
  }

  if (!guideDetails) {
    return (
      <div className="text-center text-red-500 py-8">
        Failed to load guide details.
      </div>
    );
  }

  return (
    <div className="guides-section flex flex-col p-8 pt-24 bg-gray-100">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigator(-1)}
          className="cursor-pointer border-1
          border-gray-300 rounded-3xl px-4 py-2 text-text-primary hover:bg-gray-200 transition"
        >
          <ArrowLeft className="inline-block mr-1" />
          Back
        </button>
      </div>

      <div className="guide-container flex flex-col md:flex-row justify-between w-full gap-6">
        {/* Guide Sample */}
        <div className="guide-sample-image flex flex-col justify-center md:w-1/2">
          <img
            src={BooksImage}
            alt="Book sample preview"
            className="rounded-lg shadow"
          />
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer">
            Download Sample <Download className="inline" size={20} />
          </button>
        </div>

        {/* Descriptions */}
        <div className="flex flex-col items-start md:w-1/2">
          <h3 className="bg-blue-100 text-blue-600 mb-3 text-xs font-medium px-3 py-1 rounded-full">
            Grade: {guideDetails.grade}
          </h3>
          <h2 className="text-2xl font-semibold mb-4">{guideDetails.title}</h2>
          <p className="text-gray-700 mb-4">{guideDetails.description}</p>

          <div className="flex items-center justify-between mt-4 mb-4">
            <div className="text-lg font-semibold text-text-primary flex items-center gap-2">
              ₹{offerPrice(guideDetails.price, guideDetails.offPercentage)}
              {guideDetails.isOff && (
                <>
                  <span className="text-sm text-gray-500 line-through">
                    ₹{guideDetails.price.toFixed(2)}
                  </span>
                  <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">
                    {guideDetails.offPercentage}% OFF
                  </span>
                </>
              )}
            </div>
          </div>

          <div>
            {guideDetails.isInStock ? (
              <span className="text-green-600 text-sm font-medium">
                In Stock ({guideDetails.stock})
              </span>
            ) : (
              <span className="text-red-500 text-sm font-medium">
                Out of Stock
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              className={`px-4 py-2 cursor-pointer text-sm rounded-3xl transition text-white ${
                guideDetails.isInStock
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!guideDetails.isInStock}
            >
              Add to Cart <ShoppingCart className="inline" size={20} />
            </button>
            <button
              className={`px-4 py-2 cursor-pointer text-sm rounded-3xl transition text-white ${
                guideDetails.isInStock
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!guideDetails.isInStock}
            >
              Buy Now <Package size={20} className="inline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideInfo;
