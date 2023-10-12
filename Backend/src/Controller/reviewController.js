import Review from "../Model/reviewModel.js";
import { StatusCodes } from "http-status-codes";

export const CreateReview = async (req, res) => {
    try {
      const { courseId, userId, rating, comment } = req.body;
  
      // Parse rating as a number (if it's sent as a string)
      const parsedRating = parseInt(rating, 5);
  
      // Create the review object with parsed rating
      const review = new Review({ courseId, userId, rating: parsedRating, comment });
      await review.save();
  
      res.status(StatusCodes.OK).json({ success: true, message: "Review added successfully", review });
    } catch (error) {
      console.error(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "Failed to add review" });
    }
  };
  
  

//get all reviews on a course
export const GetReviewsByCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const reviews = await Review.find({ courseId }).populate("userId", "name"); 
    res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch reviews" });
  }
};
