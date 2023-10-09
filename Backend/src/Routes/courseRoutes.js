import express from "express";
import uploadMiddleware from "../middleware/vedioUpload.js";

import {
  UploadCourseAndChapter,
  GetAllCourses,
  UploadChapterById,
  GetCourseById,
  GetChapterById,
} from "../Controller/courseController.js";

const router = express.Router();
//create course route
router.post("/create-course", uploadMiddleware, UploadCourseAndChapter);
//create chapter by id route
router.post("/courses/:courseId/chapters", uploadMiddleware, UploadChapterById);
// get-all courses route
router.get("/courses", GetAllCourses);
//get single course route
router.get("/courses/:courseId", GetCourseById);
//get single chapter by id 
router.get("/chapters/:chapterId", GetChapterById);



export default router;
