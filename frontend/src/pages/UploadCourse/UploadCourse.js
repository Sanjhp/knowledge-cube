import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreatorNavbar from "../../components/Navbar/CreatorNavbar";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";

const validateSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.string().required("price is required"),
});

const UploadCourse = () => {
  const navigate = useNavigate();
  const [isNewCourse, setIsNewCourse] = useState(true);
  const [certificateFile, setCertificateFile] = useState(null);
  const [assessmentFile, setAssessmentFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const accessToken = Cookies.get("token");
  const [id, setId] = useState(null);
  console.log("id :>> ", id);
  useEffect(() => {
    if (accessToken) {
      const parts = accessToken.split(".");
      const payload = JSON.parse(atob(parts[1]));
      const userId = payload._id;
      setId(userId);
      setToken(accessToken);
      console.log("User ID:", userId);
    } else {
      console.log("Token not found");
    }
  }, [accessToken]);

  const handleImageUpload = (event) => {
    const coverImage = event.target.files[0];
    if (coverImage && coverImage.type.startsWith("image/")) {
      console.log("Selected Cover Image:", coverImage);
      setSelectedImage(coverImage);
    } else {
      console.error("Invalid Image Format");
    }
  };

  useEffect(() => {
    if (selectedImage) {
      setFormData({ ...formData, coverImage: selectedImage });
    }
  }, [selectedImage]);

  const [val, setVal] = useState([]);
  var count = 1;

  function handleAdd() {
    count = count + 1;
    const abc = [...val, []];
    setVal(abc);
    // const count2 = count[count.length - 1] + 1;
    // setCount(count2);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateSchema),
  });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    language: "",
    skillLevel: "",
    coverImage: null,
    assessmentPdf: null,
    certificate: null,
  });

  const [chapters, setChapters] = useState([{ title: "", video: null }]);

  const handleChapterFileChange = (event, index) => {
    const updatedChapters = [...chapters];
    updatedChapters[index].video = event.target.files[0];
    setChapters(updatedChapters);
  };

  const username = "Samantha";

  const uploadCourse = async (data) => {
    try {
      // let creatorId = Cookies.get("roleId");
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("language", data.language);
      formData.append("coverImage", selectedImage);
      formData.append("skillLevel", data.skillLevel);
      formData.append("assessmentPdf", assessmentFile);
      formData.append("certificate", certificateFile);
      formData.append("creatorId", id);
      console.log(formData);
    } catch (error) {
      console.error("Error uploading course: ", error);
    }
  };

  const uploadChapters = async (courseId, chapters) => {
    try {
      const chapterIds = [];

      for (const chapter of chapters) {
        const chapterFormData = new FormData();
        chapterFormData.append("title", chapter.title);
        chapterFormData.append("video", chapter.video);

        const chapterResponse = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/course-creator/courses/${courseId}/chapters`,
          chapterFormData
        );

        if (chapterResponse.status === 200) {
          chapterIds.push(chapterResponse.data.chapterId);
        } else {
          console.error("Error uploading chapter:", chapter.title);
          return null;
        }
      }

      return chapterIds;
    } catch (error) {
      console.error("Error uploading chapters: ", error);
      return null;
    }
  };

  return (
    <div>
      <CreatorNavbar />
      <div className="grid grid-cols-6 mb-8">
        <form
          onSubmit={handleSubmit(uploadCourse)}
          className="col-span-6 flex flex-col"
        >
          <div className="flex flex-row justify-between items-center px-8 py-8 bg-slate-200 bg-opacity-30">
            <div className="flex flex-row items-center">
              <span className="text-xl font-thin text-gray-600">
                Good Morning
                <span className="font-semibold text-[#3484B4]">{username}</span>
              </span>
            </div>
            <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-[150px]">
              <Link
                to="/new-course"
                className="flex flex-row justify-center items-center text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mx-4"
                >
                  <path
                    strokeLinecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                New Course
              </Link>
            </div>
          </div>
          <span className="text-l font-semibold my-4 px-4">
            Upload New Course
          </span>
          <div className="grid grid-cols-4 gap-4 justify-center items-center px-4">
            <div className="grid grid-cols-1 gap-4 col-span-2">
              <div className="grid grid-col-1 gap-2">
                <span className="text-gray-500 text-sm">Title</span>
                <input
                  type="text"
                  name="title"
                  placeholder="type here"
                  className="px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-200"
                  {...register("title")}
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <span className="text-gray-500 text-sm">Description</span>
                <textarea
                  cols="10"
                  type="text"
                  placeholder="type here"
                  name="description"
                  className="px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-200"
                  {...register("description")}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 col-span-2">
              <div className="grid grid-cols-1 gap-2">
                <span className="text-gray-500 text-sm">
                  Upload Cover Image
                </span>
                <input
                  type="file"
                  className="px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-200 text-gray-400"
                  placeholder="type here"
                  name="coverImage"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <span className="text-gray-500 text-sm">Select language</span>
                  <select
                    {...register("language")}
                    value={formData.language}
                    onChange={(e) =>
                      setFormData({ ...formData, language: e.target.value })
                    }
                    className="px-4 py-4 text-gray-400 bg-gray-200 rounded-xl"
                  >
                    <option value="" disabled className="text-gray">
                      Language is...
                    </option>
                    <option selected value="English" className="text-gray">
                      English
                    </option>
                    <option selected value="Hindi" className="text-gray">
                      Hindi
                    </option>
                    <option value="Telugu" selected className="text-gray">
                      Telugu
                    </option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <span className="text-gray-500 text-sm">
                    Select skill level
                  </span>
                  <select
                    {...register("skillLevel")}
                    value={formData.skillLevel}
                    onChange={(e) =>
                      setFormData({ ...formData, skillLevel: e.target.value })
                    }
                    className="px-4 py-4 text-gray-400 bg-gray-200 rounded-xl"
                  >
                    <option selected value="" disabled className="text-gray">
                      Skill level is...
                    </option>
                    <option selected value="Beginner" className="text-gray">
                      Beginner
                    </option>
                    <option selected value="Intermediate" className="text-gray">
                      Intermediate
                    </option>
                    <option selected value="Advance" className="text-gray">
                      Advance
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <span className="text-l font-semibold my-8 px-4">Course Content</span>
          {chapters.map((chapter, index) => (
            <div
              className="grid grid-rows-2 gap-2 px-4 items-center"
              key={index}
            >
              {val.map((data, i) => {
                return (
                  <div className="grid grid-cols-8 gap-8 rounded-lg shadow-md justify-center items-center px-6 py-6">
                    <div className="grid col-span-1">{`Chapter - ${
                      index + 1
                    }`}</div>
                    <div className="grid col-span-2 ">
                      <span className="text-gray-500">Title</span>
                      <input
                        type="text"
                        className="bg-gray-200 px-2 py-2 rounded-xl"
                        placeholder="Type here"
                        value={chapter.title}
                        onChange={(e) => {
                          const updatedChapters = [...chapters];
                          updatedChapters[index].title = e.target.value;
                          setChapters(updatedChapters);
                        }}
                      />
                    </div>
                    <div className="grid col-span-5">
                      <input
                        type="file"
                        className="bg-gray-200 px-2 py-2 rounded-xl"
                        onChange={(e) => handleChapterFileChange(e, index)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
          <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 my-6 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-[200px]">
            <button
              onClick={uploadChapters}
              className="flex flex-row justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Submit
            </button>
          </div>

          <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 my-6 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-[200px]">
            <button
              onClick={() => handleAdd()}
              className="flex flex-row justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Add Chapter
            </button>
          </div>

          <span className="text-l font-semibold my-8 px-4">
            Other Information
          </span>
          <div className="grid grid-cols-4 px-4 gap-4 items-center">
            <div className="grid grid-rows-2 justify-center items-center">
              <span className="text-gray-500"> Price </span>
              <input
                type="decimal"
                placeholder="$|0.0"
                name="price"
                className="bg-gray-200 px-2 py-2 rounded-xl "
                {...register("price")}
              />
            </div>
            <div className="grid grid-rows-2 justify-center items-center">
              <span className="text-gray-500"> Certificate </span>
              <input
                type="file"
                placeholder="pdf"
                className="bg-gray-200 px-2 py-2 rounded-xl"
                onChange={(e) => setCertificateFile(e.target.files[0])}
              />
            </div>

            <div className="grid grid-rows-2 justify-center items-center">
              <span className="text-gray-500"> Assessment </span>
              <input
                type="file"
                placeholder="pdf"
                className="bg-gray-200 px-2 py-2 rounded-xl"
                onChange={(e) => setAssessmentFile(e.target.files[0])}
              />
            </div>

            <div className="grid justify-center items-end mt-8">
              <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-[200px]">
                <button
                  type="submit"
                  className="flex flex-row justify-center items-center"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadCourse;
