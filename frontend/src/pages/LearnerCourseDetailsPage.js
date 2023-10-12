import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import LearnerNavbar from "../components/Navbar/LearnerNavbar";
import Rate from "../components/Rate";
import axios from "axios";

const LearnerCourseDetailsPage = () => {
  const text = [
    {
      title: "Learn Adobe CC with our Masterclass",
      subtitle:
        "In this Adobe CC Masterclass, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Register now.",
      insights: [
        {
          rating: "4.5 (1,348 ratings)",
          iconClass: "ri-star-fill text-orange-400",
        },
        {
          views: "Enrolled 45 students",
          iconClass: "ri-eye-line text-green-500",
        },
        {
          duration: "Duration 10 week",
          iconClass: "ri-time-line text-gray-500",
        },
        {
          lessons: "36 Lessons",
          iconClass: "ri-play-circle-line text-violet-500",
        },
      ],
    },
  ];
  const categories = ["Overview", "Curriculum", "Instructor", "Reviews"];
  const cards = [
    {
      name: "Overview",
      details: [
        {
          header: "Course Description1",
          detail:
            " Do esse nisi duis do reprehenderit tempor tempor veniam commodo velit.Anim non incididunt aliqua reprehenderit Lorem laboris commodo eu deserunt nulla sunt proident laboris eiusmod.sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui. sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.",
        },
        {
          header: "Course Description2",
          detail:
            " Dolore proident consectetur fugiat Lorem aute cupidatat non in eu Lorem ullamco sint anim.Aute sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui. sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.",
        },
        {
          header: "Course Description3",
          detail:
            " Et ex commodo voluptate dolore esse sunt nisi mollit reprehenderit commodo amet ea occaecat ullamco.Ex quis tempor velit id commodo eu qui deserunt nostrud ut aute magna. sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.",
        },
      ],
    },
    {
      name: "Curriculum",
      details: [
        {
          header: "Course Description4",
          detail:
            " Do esse nisi duis do reprehenderit tempor tempor veniam commodo velit.Anim non incididunt aliqua reprehenderit Lorem laboris commodo eu deserunt nulla sunt proident laboris eiusmod.sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui. sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.",
        },
        {
          header: "Course Description5",
          detail:
            " Dolore proident consectetur fugiat Lorem aute cupidatat non in eu Lorem ullamco sint anim.Aute sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui. sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.",
        },
        {
          header: "Course Description6",
          detail:
            " Et ex commodo voluptate dolore esse sunt nisi mollit reprehenderit commodo amet ea occaecat ullamco.Ex quis tempor velit id commodo eu qui deserunt nostrud ut aute magna. sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.",
        },
      ],
    },
    {
      name: "Instructor",
      details: [
        {
          header: "Course Description7",
          detail:
            " Do esse nisi duis do reprehenderit tempor tempor veniam commodo velit.Anim non incididunt aliqua reprehenderit Lorem laboris commodo eu deserunt nulla sunt proident laboris eiusmod.sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui. sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.",
        },
        {
          header: "Course Description8",
          detail:
            " Dolore proident consectetur fugiat Lorem aute cupidatat non in eu Lorem ullamco sint anim.Aute sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui. sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.",
        },
        {
          header: "Course Description9",
          detail:
            " Et ex commodo voluptate dolore esse sunt nisi mollit reprehenderit commodo amet ea occaecat ullamco.Ex quis tempor velit id commodo eu qui deserunt nostrud ut aute magna. sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.sit adipisicing adipisicing anim irure aliqua nulla ad commodo qui.",
        },
      ],
    },
    {
      name: "Reviews",
      details: [
        {
          header: "Course Description10",
          detail:
            " Do esse nisi duis do reprehenderit tempor tempor veniam commodo velit.Anim non incididunt aliqua reprehenderit Lorem laboris commodo eu deserunt nulla sunt proident laboris eiusmod.sit adipisicing ",
        },
        {
          header: "Course Description12",
          detail:
            " Et ex commodo voluptate dolore esse sunt nisi mollit reprehenderit commodo amet ea occaecat ullamco.",
        },
      ],
    },
  ];
  const coursePricecard = [
    {
      index: "0",
      courseName: "Introduction to Python Programming",
      courseCard: [
        {
          img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
          insights: [
            {
              disPrice: "$100",
              class: "text-4xl font-semibold text-black",
            },
            {
              actPrice: "$456",
              class: "text-gray-400 text-xl font-extralight line-through",
            },
          ],
          dealLeft: "11 Hours left at this price",
          info: [
            {
              language: "English",
              img: "http://skilify.theuxuidesigner.com/images/svg/language.svg",
            },
            {
              requisites: "Use of desktop, tablet and mobile",
              img: "http://skilify.theuxuidesigner.com/images/svg/monitor-icon.svg",
            },
            {
              access: "Full time access",
              img: "http://skilify.theuxuidesigner.com/images/svg/timer.svg",
            },
            {
              perks: "Certificate of completion",
              img: "http://skilify.theuxuidesigner.com/images/svg/certificate.svg",
            },
          ],
          dealForTeams: [
            {
              deal1: "Get you team access to 3500+ top courses anytime.",
              cta: "Contact our sale",
              to: "",
            },
          ],
        },
      ],
    },
  ];
  const [set, setSet] = useState(cards[0].details);
  const [select, setSelect] = useState("Overview");
  const [highlight, setHighlight] = useState(true);
  const [unhighlight, setUnhighlight] = useState(false);
  function clickFunction(val) {
    if (
      val != "Overview" &&
      (val === "Curriculum" || val === "Instructor" || val === "Reviews")
    ) {
      setHighlight(false);
      setUnhighlight(true);
    }
    setSelect(val);
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].name === val) {
        setSet(cards[i].details);
        break;
      }
    }
  }
  useEffect(() => {
    setHighlight(true);
    setUnhighlight(false);
    function clickFunction(val) {
      if (
        val != "Overview" &&
        (val === "Curriculum" || val === "Instructor" || val === "Reviews")
      ) {
        setHighlight(false);
      }
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].name === val) {
          setSet(cards[i].details);
          break;
        }
      }
    }
  }, []);
  const [courseDetails, setCourseDetails] = useState({});
  const [rating, setRating] = useState(0);
  const { courseId } = useParams();
  const GetSingleCourse = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/course-creator/courses/${courseId}`
      );
      console.log("res", res?.data?.course);
      setCourseDetails(res?.data?.course);
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
  };

  return (
    <div>
      <LearnerNavbar />
      <div className="grid grid-cols-12 gap-2">
        {/* HEADER AND INSIGHTS */}
        <div className="grid grid-cols-12 col-span-8 gap-4 px-12 py-12">
          <div className="col-span-12">
            <span className="text-5xl flex flex-cols col-span-5 my-4">
              {courseDetails?.title}
            </span>
            <span className="text-sm font-extralight flex flex-cols col-span-5 my-2"></span>
            <div className="flex flex-rows col-span-5 my-2">
              <span className="flex flex-rows mx-2 col-span-4 justify-center items-center">
                <i className="ri-star-fill text-orange-400"></i>
                <span className="text-sm font-extralight">
                  4.5 (1,348 ratings)
                </span>
              </span>

              <span className="flex flex-rows mx-2 col-span-4 justify-center items-center">
                <i className="ri-eye-line text-green-500"></i>
                <span className="text-sm font-extralight">
                  Enrolled 45 students
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

          <div className="grid grid-cols-12 justify-center items-center col-span-12 col-start-1">
            <button
              className={`flex col-span-2 justify-center mx-2 px-2 py-2 rounded-sm hover:bg-orange-500 hover:text-white items-center ${
                selectedButton === 0
                  ? "bg-orange-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } font-extralight focus:bg-orange-500 focus:text-white active:bg-orange-400 active:text-white`}
              onClick={() => handleButtonClick(0)}
            >
              Overview
            </button>

            <button
              className={`flex col-span-2 justify-center mx-2 px-2 py-2 rounded-sm hover:bg-orange-500 hover:text-white items-center ${
                selectedButton === 1
                  ? "bg-orange-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } font-extralight focus:bg-orange-500 focus:text-white active:bg-orange-400 active:text-white`}
              onClick={() => handleButtonClick(1)}
            >
              Curriculum
            </button>

            <button
              className={`flex col-span-2 justify-center mx-2 px-2 py-2 rounded-sm hover:bg-orange-500 hover:text-white items-center ${
                selectedButton === 2
                  ? "bg-orange-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } font-extralight focus:bg-orange-500 focus:text-white active:bg-orange-400 active:text-white`}
              onClick={() => handleButtonClick(2)}
            >
              Instructor
            </button>

            <button
              className={`flex col-span-2 justify-center mx-2 px-2 py-2 rounded-sm hover:bg-orange-500 hover:text-white items-center ${
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
            {selectedButton === 0 && (
              <div className="col-span-8 my-4">
                <span className="text-3xl">Course Description</span>
                <br />
                <br />
                {courseDetails?.description}
              </div>
            )}

            {selectedButton === 1 && (
              <div className="col-span-8 my-4">
                <span className="text-3xl">Curriculum</span>
                <br />
                <br />
                {courseDetails?.chapters?.map((chapter, index) => (
                  <li key={chapter?._id} className="list-none	">
                    <span className="font-bold">{chapter.title}</span> -{" "}
                    <video width="400" height="350" controls>
                      <source
                        src={`http://localhost:5000/${chapter?.videoUrl}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </li>
                ))}
              </div>
            )}

            {selectedButton === 2 && (
              <div className="col-span-8 my-4">
                <span className="text-3xl">Instructor</span>
                <br />
                <br />
                Bio
              </div>
            )}

            {selectedButton === 3 && (
              <div className="col-span-8 my-4">
                <span className="text-3xl">Reviews</span>
                <br />
                <br />
                <div className="grid grid-cols-10 col-span-10 gap-2">
                  <span className="text-xl my-4 col-span-10">
                    Send your Review
                  </span>
                  <input
                    placeholder="Your Name"
                    type="text"
                    className="col-span-3 text-gray-200 p-4 rounded-sm border-[1px] border-gray-200"
                  />
                  <input
                    placeholder="Your Email"
                    type="text"
                    className="col-span-3 text-gray-200 p-4 rounded-sm border-[1px] border-gray-200"
                  />
                  <div className="col-span-10"></div>
                  <input
                    placeholder="Review Title"
                    type="text"
                    className="col-span-10 col-start-1 text-gray-200 p-4 rounded-sm border-[1px] border-gray-200"
                  />
                  <textarea
                    placeholder="Write Feedback"
                    className="col-span-10 col-start-1 text-gray-200 p-4 rounded-sm border-[1px] border-gray-200"
                  />
                </div>
                {/* Reviews content goes here */}
              </div>
            )}

            {/* Add your review form or other content here */}
          </div>
        </div>

        {/* COURSE PRICE CARD */}
        <div className="grid grid-cols-4 col-span-4 col-start-9 items-center my-8 mx-8">
          {/* {coursePricecard.map((element) => ( */}
          <div className="flex flex-col col-span-4 px-4 py-4 bg-white border-2 border-gray-100 shadow-2xl shadow-gray-400 rounded-md transition ease-in delay-0 hover:-translate-y-2 duration:1000">
            {/* {element.courseCard.map((elements) => ( */}
            <div className="flex flex-col">
              <img
                src="https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&amp;auto=format&am"
                className="w-fill rounded-md z-10"
              />
              <div className="flex flex-row justify-center items-center my-4">
                {/* {elements.insights.map((insight) => ( */}
                {/* <span className={insight.class + " mx-2"}> */}
                <span className="">
                  {/* {insight.disPrice}
                        {insight.actPrice} */}
                  Rs. {courseDetails?.price}
                </span>
                {/* ))} */}
              </div>
              {/* <span className="flex justify-center items-center text-center text-orange-400 leading-6 mb-4">
                    <i class="ri-time-line text-orange-400"></i>
                    {elements.dealLeft}
                  </span> */}
              <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid">
                <Link
                  to="/new-course"
                  className="flex flex-row justify-center items-center"
                >
                  Buy Now
                </Link>
              </div>
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
              {/* <span className="text-xl font-semibold mt-4">
                    Training 5 or more people?
                  </span>
                  <div className="flex flex-col border-b-[1px] border-gray-200">
                    {elements.dealForTeams.map((ele) => (
                      <div className="flex flex-cols items-center">
                        <span className="font-extralight my-2">
                          {ele.deal1}
                          <Link to={ele.to} className="text-orange-400">
                            {ele.cta}
                          </Link>
                        </span>
                      </div>
                    ))}
                  </div> */}
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
            {/* ))} */}
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default LearnerCourseDetailsPage;
