import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let destinationFolder = "public/video-lectures";

    const ext = path.extname(file.originalname);
    if (ext === ".jpg" || ext === ".jpeg" || ext === ".png" || ext === ".gif") {
      destinationFolder = "public/course-images";
    }

    // Create destination folder if it doesn't exist
    if (!fs.existsSync(destinationFolder)) {
      fs.mkdirSync(destinationFolder, { recursive: true });
    }

    cb(null, destinationFolder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
// const fileFilter = (req, file, cb) => {
//   console.log("Original File Extension:", path.extname(file.originalname));
//   let ext = path.extname(file.originalname).toLowerCase();
//   console.log("Standardized Extension:", ext);
//   if (ext !== ".mkv" && ext !== ".mp4") {
//     return cb(new Error("Only video files are allowed"));
//   }
//   cb(null, true);
// };
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();

  if (req.fieldname === "coverImage") {
    return cb(null, true);
  }
  if (ext === ".mkv" || ext === ".mp4") {
    return cb(null, true);
  }
  return cb(new Error("Only .mkv and .mp4 video files are allowed"));
};

const videoUpload = multer({
  storage: storage,
//   fileFilter: fileFilter,
});
export default videoUpload;
