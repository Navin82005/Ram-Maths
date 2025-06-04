import axios from "axios";
import { BooksImage } from "../assets/vector";

export const fetchGuideList = async () => {
  try {
    const guideList = [
      {
        id: 1,
        title: "Guide 1",
        description: "Description for Guide 1",
        image: BooksImage,
        price: 10.99,
        isOff: false,
        offPercentage: 0,
        isInStock: true,
        stock: 100,
        grade: "12th",
      },
      {
        id: 2,
        title: "Guide 2",
        description: "Description for Guide 2",
        image: BooksImage,
        price: 10.99,
        isOff: true,
        offPercentage: 50,
        isInStock: true,
        stock: 100,
        grade: "12th",
      },
      {
        id: 3,
        title: "Guide 3",
        description: "Description for Guide 3",
        image: BooksImage,
        price: 10.99,
        isOff: false,
        offPercentage: 0,
        isInStock: false,
        stock: 0,
        grade: "12th",
      },
    ];
    const response = { data: guideList, error: false };

    return response;
  } catch (error) {
    console.error("Error fetching guide list:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const fetchGuideDetails = async (id) => {
  const guideId = id;
  try {
    // Simulating a database call
    const guideDetails = {
      id: guideId,
      title: `Guide ${guideId}`,
      description: `This guide provides comprehensive information on the topic,
            including step-by-step instructions, tips, and best practices to
            help you achieve your goals effectively.`,
      image: BooksImage,
      price: 10.99,
      isOff: true,
      offPercentage: 50,
      isInStock: true,
      stock: 100,
      grade: "12th",
    };
    const response = { data: guideDetails, error: false };

    return response;
  } catch (error) {
    console.log("Error fetching guide details:", error);
    return {
      error: true,
      message: "Failed to fetch guide details",
    };
  }
};
