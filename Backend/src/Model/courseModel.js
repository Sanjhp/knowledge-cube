import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: false,
  },
  language: {
    type: String,
    required: true,
  },
  skillLevel: {
    type: String,
    required: true,
  },
  chapters: [
    {
      title: {
        type: String,
        required: true,
      },
      videoUrl: {
        type: String,
        required: true,
      },
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    index: true,
  },
  certificate: {
    type: String,
    required: false,
  },
  assessmentPdf: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
