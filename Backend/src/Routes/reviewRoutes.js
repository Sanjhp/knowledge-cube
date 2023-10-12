
import express from 'express'
import { CreateReview, GetReviewsByCourse } from "../Controller/reviewController.js";


const router = express.Router();

router.get('/get-reviews/:courseId',CreateReview);
router.post('/create-review',CreateReview);

export default router;