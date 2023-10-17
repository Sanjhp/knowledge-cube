import express from "express";
import {
  enrollUserInCourse,
  getEnrolledCoursesByUserId,
} from "../Controller/enrollmentController.js";

const router = express.Router();

router.post("/add-enrollment", enrollUserInCourse);
router.get("/user-enrolled-courses/:userId", getEnrolledCoursesByUserId);
export default router;
