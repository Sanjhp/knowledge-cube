import express from "express";
import uploadMiddleware from "../middleware/vedioUpload.js";

import {
  UploadCourse,
  GetAllCourses,
  UploadChapterById,
} from "../Controller/courseController.js";

const router = express.Router();

router.post("/create-course",uploadMiddleware.single("coverImage"),  UploadCourse);
router.post("/courses/:courseId/chapters",uploadMiddleware.single("video"), UploadChapterById);
router.get("/courses", GetAllCourses);


export default router;
