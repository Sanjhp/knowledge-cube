import mongoose from "mongoose";

const chapterSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    vedioDuration: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Chapter = mongoose.model("Chapter", chapterSchema);

export default Chapter;
