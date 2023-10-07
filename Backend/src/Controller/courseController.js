import Chapter from "../Model/chapterModel.js";
import User from "../Model/userModel.js"
import Course from "../Model/courseModel.js";
import { StatusCodes } from "http-status-codes";

// API endpoint for uploading a course
export const UploadCourse = async (req, res) => {
  try {
    const { title, language, skillLevel, price, description } = req.body;
    const coverImage = req.file.path; 

    // let creatorId;

    // if (req?.user?.roleName === "Creator") {
    //   creatorId = req.user.id;
    // } else {
    //   return res.status(StatusCodes.UNAUTHORIZED).json({
    //     success: false,
    //     message: "Only creators are allowed to upload courses.",
    //   });
    // }
    // const user = await User.findById(creatorId);
    // if (!user || user.role !== 'creator') {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Only creators are allowed to upload courses.',
    //   });
    // }
    const creatorId = req.headers.creatorId; // Assuming creatorId is in the request headers

    // Check if the user with creatorId has the role of a creator
    const user = await User.findById(creatorId);
    if (!user || user.role !== 'Creator') {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: 'Only creators are allowed to upload courses.',
      });
    }
    const course = await Course.create({
      title,
      coverImage,
      language,
      skillLevel,
      price,
      description,
      chapters: [],
      creatorId,
    });

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Course added successfully!",
      course: course,
    });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to add the course",
      error: error.message,
    });
  }
};

// API endpoint for uploading a chapter for a specific course
export const UploadChapterById = async (req, res) => {
  try {
    const { title } = req.body;
    const courseId = req.params.courseId;
    const videoUrl = req.file.path;

    const chapter = await Chapter.create({
      title,
      videoUrl,
    });

    // Find the course by ID and add the chapter to its chapters array
    const course = await Course.findByIdAndUpdate(
      courseId,
      { $push: { chapters: chapter._id } },
      { new: true }
    );

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Chapter added successfully!",
      chapter: chapter,
      course: course,
    });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to add the chapter",
      error: error.message,
    });
  }
};

// API endpoint for getting all courses
export const GetAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("chapters");
    return res.status(StatusCodes.OK).json({
      success: true,
      courses: courses,
    });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to retrieve courses",
      error: error.message,
    });
  }
};
