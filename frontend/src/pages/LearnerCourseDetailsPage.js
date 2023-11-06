import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LearnerNavbar from "../components/Navbar/LearnerNavbar";
import Rate from "../components/Rate";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoModal from "../components/vedio/vedio";
import dummyuser from "../assets/user.webp";

const LearnerCourseDetailsPage = () => {
  const navigate = useNavigate();
  const [highlight, setHighlight] = useState(true);
  const [unhighlight, setUnhighlight] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const userId = Cookies.get("userId");
  const [isEnrolled, setIsEnrolled] = useState(false);
  console.log("isEnrolled :>> ", isEnrolled);

  const getEnrolledCourses = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/enroll/user-enrolled-courses/${userId}`
      );
      setLoading(false);
      const enrolledCourses = res.data.enrolledCourses;
      setIsEnrolled(enrolledCourses.some((course) => course._id === courseId));

      // setEnrolledCourses(res.data.enrolledCourses);
    } catch (err) {
      setLoading(false);
      console.log("Error: ", err);
    }
  };
  useEffect(() => {
    getEnrolledCourses();
  }, []);

  useEffect(() => {
    setHighlight(true);
    setUnhighlight(false);
  }, []);
  const [courseDetails, setCourseDetails] = useState({});
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState("");
  const [enrollments, setEnrollments] = useState([]);
  const { courseId } = useParams();
  const [showVideo, setShowVideo] = useState(null);
  const Id = Cookies.get("userId");

  const CreateEnrollment = async () => {
    try {
      const enrollmentdata = {
        userId: Id,
        courseId: courseId,
      };
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/enroll/add-enrollment`,
        enrollmentdata
      );
      toast.success(res?.data?.message);
    } catch (err) {
      toast.success(err.response.data.message);
      console.log("err :>> ", err);
    }
  };

  const createReviewFunction = async (data) => {
    try {
      const data = {
        courseId: courseId,
        userId: Id,
        comment: comment,
      };
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/review/create-review`,
        data
      );
      toast.success(res.data.message);
      navigate("/learner-dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("error :>> ", error);
    }
  };

  const GetSingleCourse = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/course-creator/courses/${courseId}`
      );

      setCourseDetails(res?.data?.course);
      setReviews(res?.data.course.reviews);
      const totalReviews = res?.data?.course?.reviews?.length || 0;
      setTotalReviews(totalReviews);
      const totalEnrollments = res?.data?.course.enrollments?.length || 0;
      setEnrollments(totalEnrollments);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    GetSingleCourse();
  }, []);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    setHighlight(false);
  };

  return (
    <div>
      <LearnerNavbar />
      <div className="grid grid-cols-12 gap-2">
        {/* HEADER AND INSIGHTS */}
        <div className="col-span-8 gap-4 px-12 py-12 ">
          <div className="col-span-12">
            <span className="text-5xl flex flex-cols col-span-5 my-4">
              {courseDetails?.title}
            </span>
            <span className="text-sm font-extralight flex flex-cols col-span-5 my-2"></span>
            <div className="flex flex-rows col-span-5 my-2">
              <span className="flex flex-rows mx-2 col-span-4 justify-center items-center">
                <i className="ri-star-fill text-orange-400"></i>
                <span className="text-sm font-extralight">
                  {totalReviews === 0 ? (
                    "No ratings"
                  ) : (
                    <>
                      {totalReviews === 1
                        ? "1 review and rating"
                        : `${totalReviews} reviews and ratings`}
                    </>
                  )}
                </span>
              </span>

              <span className="flex flex-rows mx-2 col-span-4 justify-center items-center">
                <i className="ri-eye-line text-green-500"></i>
                <span className="text-sm font-extralight">
                  {enrollments} Enrolled Students
                </span>
              </span>

              <span className="flex flex-rows mx-2 col-span-4 justify-center items-center">
                <i className="ri-play-circle-line text-violet-500"></i>
                <span className="text-sm font-extralight">
                  {courseDetails?.chapters?.length} Lessons
                </span>
              </span>
            </div>
          </div>

          {/* FILTER AND DESCRIPTION */}

          <div className="grid grid-cols-12 justify-center items-center col-span-12 col-start-1 mt-8">
            <button
              className={`flex col-span-2 justify-center mx-[3px] px-2 py-2 rounded-sm hover:bg-orange-500 hover:text-white items-center ${
                selectedButton === 0 || highlight === true
                  ? "bg-orange-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } font-extralight focus:bg-orange-500 focus:text-white active:bg-orange-400 active:text-white`}
              onClick={() => handleButtonClick(0)}
            >
              Curriculum
            </button>

            <button
              className={`flex col-span-2 justify-center mx-[3px] px-2 py-2 rounded-sm hover:bg-orange-500 hover:text-white items-center ${
                selectedButton === 1
                  ? "bg-orange-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } font-extralight focus:bg-orange-500 focus:text-white active:bg-orange-400 active:text-white`}
              onClick={() => handleButtonClick(1)}
            >
              Overview
            </button>

            <button
              className={`flex col-span-2 justify-center mx-[3px] px-2 py-2 rounded-sm hover:bg-orange-500 hover:text-white items-center ${
                selectedButton === 2
                  ? "bg-orange-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } font-extralight focus:bg-orange-500 focus:text-white active:bg-orange-400 active:text-white`}
              onClick={() => handleButtonClick(2)}
            >
              Instructor
            </button>

            <button
              className={`flex col-span-2 justify-center mx-[3px] px-2 py-2 rounded-sm hover:bg-orange-500 hover:text-white items-center ${
                selectedButton === 3
                  ? "bg-orange-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } font-extralight focus:bg-orange-500 focus:text-white active:bg-orange-400 active:text-white`}
              onClick={() => handleButtonClick(3)}
            >
              Reviews
            </button>
          </div>

          <div className="col-span-12 col-start-1">
            {selectedButton === 1 && (
              <div className="col-span-8 my-4">
                <span className="text-3xl">Course Description</span>
                <br />
                <br />
                {courseDetails?.description}
              </div>
            )}

            {selectedButton === 0 ||
              (highlight === true && (
                <div className="col-span-8 my-4">
                  <span className="text-3xl">Curriculum</span>
                  <br />
                  <br />
                  {courseDetails?.chapters?.map((chapter, index) => {
                    return (
                      <li
                        key={chapter?._id}
                        className={
                          showVideo
                            ? "list-none flex-col gap-3 justify-between items-center p-4 border-[1px] border-gray-200"
                            : "list-none flex gap-3 justify-between items-center p-4 border-[1px] border-gray-200"
                        }
                      >
                        <div
                          className={
                            showVideo
                              ? "flex flex-col justify-end items-end"
                              : "flex  justify-center items-center"
                          }
                        >
                          <span>{index + 1}</span>
                          <span
                            className={
                              showVideo
                                ? "hidden font-bold mx-2"
                                : "font-bold mx-2"
                            }
                          >
                            {chapter.title}
                          </span>
                        </div>
                        {isEnrolled && (
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcUlEQVR4nO2Yu0oDQRSGPyysbSRFYqkg6ENoJ7G19TV8ABs7bX0C0eAFEm3ESnwAG8FHEIxo0ggpjgzMhFE3sLuMm+PmfHBgGeby/5yZ3dkDhmEYhpGeFtABBoAoiQFwDiwXMdFXIFwmhNPWzGOk4wd08w6oiCbQ89pO8wwI20mTicCS1/ZODkIKtSJ59ZmROmXkFlinBkYEGAHHwGLJOdQYCfEG7AHzJedSYeQqen4CtkrON3Ujjg3gMWpLdX6kaiOOOWAXeEl4fmQaRgILwAHwmeD8yDSNBFaAs6jfM7CTeI3KjHR/GNlOvMYY21rU9LBvZrx+10rOG2MfxJm9oozqcGm8AVb5W8T+EJUhM5eRvu/oCnVay0GveTqf+M49ZWZawLXX5jRm8pCwpFl13MdGNBWrpWB8xEbufOMF/4dLr9lpH9OOHB4CDfTSAI4ivU77N/YVbBMpGE5zJm2fqqECkTIhhl7jr0wYhmEYBiX5AmT1wprACIzgAAAAAElFTkSuQmCC"
                            className="hover:scale-110 w-4 cursor-pointer"
                            onClick={() => setShowVideo(index)}
                          />
                        )}

                        {showVideo !== null && (
                          <VideoModal
                            videoUrl={`http://localhost:5000/${courseDetails?.chapters[showVideo]?.videoUrl}`}
                            onClose={() => setShowVideo(null)}
                          />
                        )}
                      </li>
                    );
                  })}
                </div>
              ))}

            {selectedButton === 2 && (
              <div className="col-span-8 my-4">
                <span className="text-3xl">Instructor</span>
                <br />
                <br />
                {courseDetails?.user?.bio}
              </div>
            )}

            {selectedButton === 3 && (
              <div className="col-span-8 my-8">
                <span className="text-3xl">Reviews & Ratings</span>
                <br />
                <br />
                <div className="grid grid-cols-10 col-span-10 gap-2">
                  <div className="col-span-10 my-4">
                    <Rate
                      rating={rating}
                      onRating={(rate) => setRating(rate)}
                    />
                  </div>
                  {/* CONSOLE.LOG rating TO VIEW DYNAMIC RATING COUNT */}
                  <span className="col-span-10 text-sm text-gray-300">
                    {rating} stars
                  </span>

                  <form className="grid grid-cols-10 col-span-10 gap-2 py-4 px-8 border-[1px] border-r-[1px] border-b-[1px] border-gray-200 rounded-sm">
                    <span className="text-xl font-extralight uppercase col-span-10 border-b-[1px] border-gray-100">
                      Send your Review
                    </span>

                    <textarea
                      placeholder="Write something"
                      name="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="col-span-10 col-start-1 text-gray-200 p-4 rounded-sm border-[1px] border-gray-200"
                    />
                    <button
                      onClick={createReviewFunction}
                      className="btn btn-primary mt-2 bg-black text-white p-2 rounded-sm col-span-2"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>

                {reviews?.map((review) => (
                  <div className="grid grid-cols-10 col-span-10 gap-2 py-4 px-4 border-[1px] border-gray-100 justify-center items-center my-2">
                    <div className="flex col-span-1">
                      <img
                        src={dummyuser}
                        // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                        className="w-[50px] h-[50px] object-cover rounded-[25px] ml-[12px]"
                      />
                    </div>
                    <p className="grid grid-cols-10 text-xs text-gray-400 col-span-3">
                      <span className="text-base text-gray-500 col-span-10">
                        Unknown User
                        {review.userId.name}
                      </span>
                      <span className="col-span-10">
                        {new Date(review.createdAt).toLocaleString()}
                      </span>
                    </p>
                    <p className="col-span-7 ml-4">{review.rating} stars</p>
                    <p className="col-span-10 border-[1px] border-gray-100 py-4 px-2">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* COURSE PRICE CARD */}
        <div className="absolute sm:left-[800px] md:left-[1124px] grid grid-cols-4 col-span-4 col-start-9 items-center my-8 mx-8">
          <div className="flex flex-col col-span-4 px-4 py-4 bg-white border-2 border-gray-100 shadow-2xl shadow-gray-400 rounded-md transition ease-in delay-0 hover:-translate-y-2 duration:1000">
            <div className="flex flex-col">
              <img
                src={`http://localhost:5000/${courseDetails?.coverImage}`}
                className="w-fill rounded-md z-10"
              />

              {!isEnrolled && (
                <>
                  <div className="flex flex-row justify-center items-center my-4">
                    <span className="">Rs. {courseDetails?.price}</span>
                  </div>
                  <div
                    className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid cursor-pointer"
                    onClick={() => CreateEnrollment(Id, courseId)}
                  >
                    Buy Now
                  </div>
                </>
              )}
              <span className="text-xl font-semibold mt-4">
                This course includes
              </span>
              <div className="flex flex-col border-b-[1px] border-gray-200">
                <div className="flex flex-cols items-center">
                  <img
                    src="http://skilify.theuxuidesigner.com/images/svg/language.svg"
                    className="mr-2"
                  />
                  <span className="font-extralight my-2">
                    {courseDetails?.language}
                  </span>
                </div>
                <div className="flex flex-cols items-center">
                  <img
                    src="http://skilify.theuxuidesigner.com/images/svg/monitor-icon.svg"
                    className="mr-2"
                  />
                  <span className="font-extralight my-2">
                    Use of desktop, tablet and mobile
                  </span>
                </div>
                <div className="flex flex-cols items-center">
                  <img
                    src="http://skilify.theuxuidesigner.com/images/svg/timer.svg"
                    className="mr-2"
                  />
                  <span className="font-extralight my-2">Full time access</span>
                </div>
                <div className="flex flex-cols items-center">
                  <img
                    src="http://skilify.theuxuidesigner.com/images/svg/certificate.svg"
                    className="mr-2"
                  />
                  <span className="font-extralight my-2">
                    Certificate of completion
                  </span>
                </div>
              </div>

              <span className="text-xl font-semibold mt-4">
                Share this course
              </span>
              <div className="flex flex-rows justify-center items-center">
                <Link to={"https://www.instagram.com"}>
                  <i className="ri-facebook-box-fill hover:text-blue-400" />
                </Link>
                <Link to="https://www.instagram.com">
                  <i className="ri-instagram-fill hover:text-pink-500" />
                </Link>
                <Link to="https://www.instagram.com">
                  <i className="ri-twitter-fill hover:text-blue-300" />
                </Link>
                <Link to="https://www.instagram.com">
                  <i className="ri-linkedin-box-fill hover:text-blue-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LearnerCourseDetailsPage;
