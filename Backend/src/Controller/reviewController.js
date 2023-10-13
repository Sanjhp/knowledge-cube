import Review from "../Model/reviewModel.js";
import User from "../Model/userModel.js";
import Role from "../Model/roleModel.js";
import { StatusCodes } from "http-status-codes";
import Course from "../Model/courseModel.js";

export const CreateReview = async (req, res) => {
  try {
    const { courseId, userId, rating, comment } = req.body;

    // Check if the user with the provided userId exists
    const user = await User.findById(userId);
    console.log("user :>> ", user);
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ success: false, message: "User not found" });
    }
    console.log("user.role :>> ", user.role);
    // Fetch the role information based on roleId

    const role = await Role.findById(user.role);
    console.log("role :>> ", role);

    if (!role) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ success: false, message: "Role not found" });
    }

    // Check if the user's role is "Creator"
    if (role.roleName === "Creator") {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Creators are not allowed to post reviews",
      });
    }
    const existingReview = await Review.findOne({ courseId, userId });

    if (existingReview) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "You have already posted a review for this course",
      });
    }

    const parsedRating = parseInt(rating, 10); 

    if (isNaN(parsedRating) || parsedRating < 0 || parsedRating > 5) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, message: "Invalid rating value" });
    }
    const review = new Review({
      courseId,
      userId,
      rating: parsedRating,
      comment,
    });

    await review.save();
    const course = await Course.findById(courseId);
    course.reviews.push(userId);
    await course.save();
  
    res
      .status(StatusCodes.OK)
      .json({ success: true, message: "Review added successfully", review });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Failed to add review" });
  }
};

//get all reviews on a course
export const GetReviewsByCourseId = async (req, res) => {
  try {
    const { courseId } = req.query;

    if (!courseId) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, message: "CourseId is required" });
    }

    // Fetch reviews by courseId
    const reviews = await Review.find({ courseId }).populate("userId");
    console.log('reviews :>> ', reviews);

    if (!reviews || reviews.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({
          success: false,
          message: "No reviews found for the given course",
        });
    }

    // Calculate the average rating
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    res.status(StatusCodes.OK).json({ success: true, reviews, averageRating });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Failed to fetch reviews" });
  }
};
