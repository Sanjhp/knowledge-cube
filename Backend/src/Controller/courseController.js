import Chapter from "../Model/chapterModel.js";
import User from "../Model/userModel.js";
import Course from "../Model/courseModel.js";
import Category from "../Model/categoryModel.js";
import Review from "../Model/reviewModel.js";
import Enrollment from "../Model/enrollmentModel.js";
import { StatusCodes } from "http-status-codes";

// API endpoint for uploading a course
export const UploadCourse = async (req, res) => {
  try {
    const {
      title,
      language,
      skillLevel,
      price,
      description,
      creatorId,
      categoryId,
    } = req.body;
    const date = new Date()
    console.log("req.body :>> ", req.body);
    const coverImage = req.files["coverImage"]
      ? req.files["coverImage"][0].path
      : null;
    const certificate = req.files["certificate"]
      ? req.files["certificate"][0].path
      : null;
    const assessmentPdf = req.files["assessmentPdf"]
      ? req.files["assessmentPdf"][0].path
      : null;
    console.log('originalName', req.files["coverImage"][0].originalname)
    const originalName = req.files["coverImage"][0].originalname.split(' ').join('-')
    console.log('originalName :>> ', originalName);
    

    if (
      !coverImage ||
      !creatorId ||
      !certificate ||
      !assessmentPdf ||
      !categoryId
    ) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Invalid request. Please provide all required fields.",
      });
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Invalid categoryId. Category not found.",
      });
    }

    const user = await User.findById(creatorId).populate("role");
    console.log("user :>> ", user);

    if (!user || user.role.roleName !== "Creator") {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Only creators are allowed to upload courses.",
      });
    }

    const course = await Course.create({
      title,
      coverImage,
      language,
      skillLevel,
      price,
      description,
      certificate,
      assessmentPdf,
      chapters: [],
      creatorId,
      Creator: user,
      category: category,
      user,
    });

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Course added successfully!",
      course: course,
      creator: user,
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
// uploading a chapter for a specific course
export const UploadChapterById = async (req, res) => {
  try {
    const { title } = req.body;
    const courseId = req.params.courseId;
    const videoUrl = req.files["video"][0].path;
    console.log("req.body :>> ", req.body);
    console.log("videoUrl :>> ", videoUrl);

    const chapter = await Chapter.create({
      title,
      videoUrl,
    });
    console.log("chapter :>> ", chapter);

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

// get all courses
export const GetAllCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate("category")
      .populate({
        path: "chapters",
        model: "Chapter",
      })

      .populate({
        path: "reviews",
        model: "Review",
      })
      .populate({
        path: "enrollments", // Make sure this path matches your Course schema
        model: "Enrollment",
      })
      .populate({
        path: "user",
        model: "User",
        populate: {
          path: "role",
          model: "Role",
        },
      });

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

// API endpoint for getting a single course by ID
export const GetCourseById = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId)
      .populate({
        path: "chapters",
        model: "Chapter",
      })
      .populate({
        path: "enrollments",
        model: "Enrollment",
      })
      .populate({
        path: "reviews",
        model: "Review",
      })
      .populate("category")
      .populate({
        path: "user",
        model: "User",
        populate: {
          path: "role",
          model: "Role",
        },
      })
      .exec();

    console.log("course :>> ", course);

    if (!course) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Course not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      course: course,
    });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to retrieve the course",
      error: error.message,
    });
  }
};

// API endpoint for getting a single chapter by ID
export const GetChapterById = async (req, res) => {
  try {
    const chapterId = req.params.chapterId;
    const chapter = await Chapter.findById(chapterId);

    if (!chapter) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Chapter not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      chapter: chapter,
    });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to retrieve the chapter",
      error: error.message,
    });
  }
};
