import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LearnerNavbar from "../components/Navbar/LearnerNavbar";
import axios from "axios";

const AllCourses = () => {
  const [favorite, setFavorite] = useState(false);

  // const [container, setContainer] = useState(categories[0].details);
  const [light, setLight] = useState(true);
  const [unlight, setUnlight] = useState(false);

  useEffect(() => {
    setLight(true);
    setUnlight(false);
  }, []);

  const [courses, setCourses] = useState([]);
console.log('courses :>> ', courses);
  const getAllCourses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/course-creator/courses"
      );
      console.log("Courses:", response.data);
      setCourses(response.data.courses); // Update the state with fetched courses
    } catch (error) {
      // Handle errors here
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div>
      <LearnerNavbar />
      <div className="grid grid-cols-12 justify-center items-center bg-blue-50 bg-opacity-30">
        <div className="grid grid-cols-10 justify-center items-center col-span-12 px-20 py-20 rounded-sm bg-blue-100 bg-opacity-50">
          <span className="flex col-span-6 text-3xl font-bold">Courses</span>
          <span className="flex col-span-2 col-start-12">
            <input
              id="search"
              type="search"
              placeholder="search here..."
              className="flex bg-white text-gray-500 font-thin px-2 py-2 hover:shadow-[0_0px_12px_12px_rgba(0,0,0,0.2)] rounded-md border-gray-100 shadow-[0_2px_10px_10px_rgba(0,0,0,0.1)] text-xs w-[300px]"
            />
            <i class="ri-search-line -ml-2 bg-black px-4 py-2 rounded-tr-md rounded-br-md text-white shadow-[0_2px_10px_10px_rgba(0,0,0,0.1)] hover:bg-gray-400 hover:text-black text-sm"></i>
          </span>
        </div>
        <div className="grid grid-cols-10 justify-center items-center col-span-10 col-start-4 px-8 py-8">
          {/* {categories.map((element) => ( */}
          <button
          // className={
          //   element.name === "All" && light === true && unlight != true
          //     ? "flex col-span-2 justify-center mx-2 px-2 py-2 rounded-sm active:bg-black active:text-white hover:bg-gray-700 hover:text-white items-center bg-black text-white font-extralight text-sm focus:bg-black focus:text-white w-16"
          //     : "flex col-span-2 justify-center mx-2 px-2 py-2 rounded-sm active:bg-black active:text-white hover:bg-gray-700 hover:text-white items-center bg-gray-200 text-gray-700 font-extralight text-sm focus:bg-black focus:text-white w-16"
          // }
          // onClick={() => filterFunction(element.name)}
          >
            aassssss {/* {element.name} */}
          </button>
          {/* ))} */}
          <select className="ml-[-80px] flex col-span-2 justify-center mx-2 px-2 py-2 rounded-sm  items-center bg-gray-300 text-black font-extralight text-sm w-[200px]">
            <option>Price</option>
            <option>$300</option>
            <option>$300</option>
            <option>$300</option>
          </select>

          <select className="ml-[-30px] flex col-span-2 justify-center mx-8 px-2 py-2 rounded-sm  items-center bg-gray-300 text-black font-extralight text-sm w-[200px]">
            <option>Category</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>Management</option>
          </select>
        </div>
        <span className="grid col-span-10 col-start-2 border-b-[1px] border-[#3483b428]"></span>

        <div className="grid grid-cols-12 col-span-12 col-start-1 col-end-13 justify-center items-center px-2 py-2 gap-4 my-8">
          <div className="grid grid-cols-12 col-span-12 col-start-1 justify-center gap-4 items-center my-8 mx-8">
          {courses.map((course )=> (
        
            <Link
              // to={element.to}
              className="flex flex-col col-span-3 px-4 py-4 bg-white border-2 border-gray-100 shadow-2xl shadow-gray-400 rounded-md transition ease-in delay-0 hover:-translate-y-2 duration:1000"
              key={course?._id}
            >
              {/* {element.courseCard.map((ele) => ( */}
              <div className="flex flex-col">
                {/* <img src={} className="w-fill rounded-md z-10" /> */}
                <i
                  class="ri-heart-line absolute z-20 text-white my-2 mx-2"
                  // onClick={() => setFavorite(ele.fav)}
                ></i>
                <div className="flex flex-row justify-between items-center my-2 border-b-[1px] border-gray-200">
                  {/* {ele.insights.map((insight) => ( */}
                  <span className="flex text-[15px] font-extralight text-gray-400">
                    {/* <i class={insight.class}></i> */}2 stars 30 v
                    {/* {insight.stars} {insight.views} {insight.lessons} */}
                  </span>
                  {/* ))} */}
                </div>
                <span className="flex text-xl text-black leading-6 my-4">
                  {course.title} {/* {ele.courseName} */}
                </span>
                <div className="flex justify-between items-center ">
                  {/* {ele.info.map((e) => ( */}
                  {/* className={e.class} */}
                  <span>
                    dr. verma 
                    {course.price}
                    {/* {e.instructor}
                          {e.actPrice}
                          {e.disPrice} */}
                  </span>
                  {/* ))} */}
                </div>
              </div>
              {/* ))} */}
            </Link>
            ))}
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
