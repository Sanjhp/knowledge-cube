import express from "express";
import uploadMiddleware from "../middleware/vedioUpload.js";

import {
  UploadCourse,
  GetAllCourses,
  UploadChapterById,
  GetCourseById,
  GetChapterById,
  GetCoursesByCreator
} from "../Controller/courseController.js";

const router = express.Router();
//create course route
router.post("/create-course", uploadMiddleware, UploadCourse);
//create chapter by id route
router.post("/courses/:courseId/chapters", uploadMiddleware, UploadChapterById);
// get-all courses route
router.get("/courses", GetAllCourses);
//get single course route
router.get("/courses/:courseId", GetCourseById);
//get single chapter by id 
router.get("/chapters/:chapterId", GetChapterById);
//get course by creatorId
router.get('/courses/creator/:creatorId', GetCoursesByCreator);



export default router;
