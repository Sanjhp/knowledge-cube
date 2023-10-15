import Enrollment from "../Model/enrollmentModel.js"; // Import the Enrollment model
import User from "../Model/userModel.js";
import Course from "../Model/courseModel.js";
import Role from "../Model/roleModel.js";
import { StatusCodes } from "http-status-codes";

export const enrollUserInCourse = async (req, res) => {
  try {
    const { courseId, userId } = req.body;

    const user = await User.findById(userId);
    console.log("user :>> ", user);
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ success: false, message: "User not found" });
    }

    const role = await Role.findById(user.role);
    if (!role) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ success: false, message: "Role not found" });
    }

    // Check if the user's role is "Creator"
    if (role.roleName === "Creator") {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Creators are not allowed to enroll in courses",
      });
    }

    // Check if the user is already enrolled in the course
    const existingEnrollment = await Enrollment.findOne({ courseId, userId });
    if (existingEnrollment) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "User is already enrolled in this course",
      });
    }

    const enrollment = new Enrollment({ courseId, userId });

    await enrollment.save();
    const course = await Course.findById(courseId);
    course.enrollments.push(enrollment._id);
    await course.save();

    res.status(StatusCodes.OK).json({
      success: true,
      message: "User enrolled successfully",
      enrollment,
    });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Failed to enroll user" });
  }
};

export const getEnrolledCoursesByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const enrollments = await Enrollment.find({ userId }).populate("courseId");
    console.log("enrollments :>> ", enrollments);
    const enrolledCourses = enrollments.map(
      (enrollment) => enrollment.courseId
    );
    console.log("enrolledCourses :>> ", enrolledCourses);
    res.status(StatusCodes.OK).json({ success: true, enrolledCourses });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to fetch enrolled courses",
    });
  }
};
