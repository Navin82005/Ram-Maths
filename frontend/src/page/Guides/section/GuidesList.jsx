import { Fragment, useEffect, useState } from "react";
import { fetchGuideList } from "../../../controller/guides.controller.mjs";
import GuideCard from "./GuideCard";

const GuidesList = () => {
  const [isLoading, setLoading] = useState(false);
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const getGuideList = async () => {
      setLoading(true);
      try {
        const response = await fetchGuideList();
        if (response.error) {
          throw new Error("Network response was not ok");
        }
        // const data = await response.json();
        setGuides(response.data);
      } catch (error) {
        console.error("Error fetching guides:", error);
      } finally {
        setLoading(false);
      }
    };
    getGuideList();
  }, []);

  return (
    <div className="guide-list-container flex flex-col items-center p-8 pt-20 bg-background-element">
      <div>
        <h1 className="text-4xl text-text-primary font-montserrat font-bold mb-6 text-center">
          Explore Guides
        </h1>
        <span>Best Quality Guides Our Ram Maths</span>
      </div>

      <div className="w-full mb-8">
        {isLoading ? (
          <ul className="w-full grid md:grid-cols-1 gap-4">
            {[...Array(3)].map((_, index) => (
              <li
                key={index}
                className="p-4 flex bg-white rounded-lg shadow animate-pulse"
              >
                <div className="w-48 h-48 bg-gray-300 rounded-lg mr-4" />
                <div className="flex flex-col justify-center space-y-2">
                  <div className="w-50 h-6 bg-gray-300 rounded" />
                  <div className="w-74 h-4 bg-gray-200 rounded" />
                  <div className="w-66 h-4 bg-gray-200 rounded" />
                </div>
              </li>
            ))}
          </ul>
        ) : guides.length > 0 ? (
          <ul className="w-full grid md:grid-cols-1 gap-4">
            {guides.map((guide, index) => (
              <GuideCard key={index} guide={guide} />
            ))}
          </ul>
        ) : (
          <p className="text-text-secondary text-center">
            No guides available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default GuidesList;
