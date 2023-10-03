import React from "react";
import { Link } from "react-router-dom";

const LearnerDashboard = () => {
  const greeting = "Good Morning";
  const user = "James";

  const list = [
    {
      index: "0",
      icon: "",
      courseName: "Introduction to Python Programming",
      insights: { lessons: "35", minutes: "240" },
      instructor: "Dr. Hemant Sharma",
      coursePrice: "$850",
    },
    {
      index: "0",
      icon: "",
      courseName: "Introduction to Python Programming",
      insights: { lessons: "35", minutes: "240" },
      instructor: "Dr. Hemant Sharma",
      coursePrice: "$850",
    },
    {
      index: "0",
      icon: "",
      courseName: "Introduction to Python Programming",
      insights: { lessons: "35", minutes: "240" },
      instructor: "Dr. Hemant Sharma",
      coursePrice: "$850",
    },
    {
      index: "0",
      icon: "",
      courseName: "Introduction to Python Programming",
      insights: { lessons: "35", minutes: "240" },
      instructor: "Dr. Hemant Sharma",
      coursePrice: "$850",
    },
  ];

  const lessonSchedule = [
    {
      date: "20/12/2023",
      lessons: [
        [
          { courseName: "Course 1" },
          { lesson: "lesson1" },
          { lecturer: "Mr.Hemant Sharma" },
          { time: "10:00 AM" },
        ],
        [
          { courseName: "Course 1" },
          { lesson: "lesson1" },
          { lecturer: "Mr.Hemant Sharma" },
          { time: "10:00 AM" },
        ],
      ],
    },
    {
      date: "23/12/2023",
      lessons: [
        [
          { courseName: "Course 1" },
          { lesson: "lesson1" },
          { lecturer: "Mr.Hemant Sharma" },
          { time: "10:00 AM" },
        ],
        [
          { courseName: "Course 1" },
          { lesson: "lesson1" },
          { lecturer: "Mr.Hemant Sharma" },
          { time: "10:00 AM" },
        ],
      ],
    },
  ];
  return (
    <div className="grid grid-cols-12 justify-center items-center">
      <div className="grid grid-cols-10 justify-center items-center col-span-12 px-12 py-12 rounded-sm bg-blue-100 bg-opacity-50">
        <span className="grid grid-rows-2 col-span-6">
          <span className="text-3xl font-bold">My Courses</span>
          <span className="text-xl font-extralight">
            {greeting} {user} !
          </span>
        </span>

        <span className="flex col-span-2 col-start-12">
          <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-[200px]">
            <Link
              to="/new-course"
              className="flex flex-row justify-center items-center"
            >
              <i class="ri-calendar-2-line mr-2"></i>
              January
            </Link>
          </div>
        </span>
      </div>
      <div className="grid grid-cols-12 col-span-12 col-start-1 justify-center gap-4 items-center my-8 mx-8">
        {list.map((element) => (
          <div className="flex flex-col col-span-3 px-4 py-4 bg-white border-2 border-gray-100 shadow-2xl shadow-gray-400 rounded-md transition ease-in delay-0 hover:-translate-y-2 duration:1000">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>

            <span className="flex text-xl text-black leading-6 my-4">
              {element.courseName}
            </span>
            <div className="flex justify-between items-center my-2">
              <span className="flex items-center">
                <i class="ri-book-line text-orange-500 text-[25px] mr-2"></i>{" "}
                {element.insights.lessons} lessons
              </span>
              <span className="flex items-center">
                <i class="ri-time-line  text-violet-500 mx-2 text-[25px]"></i>
                {element.insights.minutes} minutes
              </span>
            </div>
            <span className="text-l font-extralight my-2">
              {element.instructor}
            </span>
            <span className="border-b-[1px] border-gray-200 my-4"></span>
            <div className="flex justify-between items-center">
              <span className="flex">{element.coursePrice} lessons</span>
              <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-32">
                <Link
                  to="/new-course"
                  className="flex flex-row justify-center items-center"
                >
                  Watch now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-12 col-span-12">
        <div className="grid grid-cols-6 col-span-6 justify-between items-center px-8">
          <span className="col-span-5 col-start-1 text-2xl font-bold">
            Lesson Schedule
          </span>
          <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-32">
            <Link
              to="/new-course"
              className="flex flex-row justify-center items-center"
            >
              Watch now
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-6 col-span-5 justify-between items-center col-start-7 px-8">
          <span className="col-span-5 text-2xl font-bold">Lesson Schedule</span>
          <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-32">
            <Link
              to="/new-course"
              className="flex flex-row justify-center items-center"
            >
              Watch now
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 col-span-12 px-8">
        <div className="grid grid-cols-6 col-span-6">
            {
                lessonSchedule.map((element)=>(
                    <div className="grid grid-cols-6 col-span-6">
                        <div className="grid grid-cols-6 col-span-6">
                            <span className="text-xl font-semibold">{element.date}</span>

                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default LearnerDashboard;
