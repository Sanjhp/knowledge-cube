import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LearnerNavbar from "../components/Navbar/LearnerNavbar";
import axios from "axios";

const AllCourses = () => {
  const [favorite, setFavorite] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  console.log("selectedCategoryId :>> ", selectedCategoryId);

  const [category, setCateogy] = useState([]);
  const getCategories = async () => {
    try {
      const categoryRes = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/category/get-categories`
      );
      console.log("categoryRes :>> ", categoryRes.data.data);
      setCateogy(categoryRes.data.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  // const [container, setContainer] = useState(categories[0].details);
  const [light, setLight] = useState(true);
  const [unlight, setUnlight] = useState(false);

  useEffect(() => {
    setLight(true);
    setUnlight(false);
  }, []);

  const [courses, setCourses] = useState([]);
  // console.log("courses :>> ", courses);

  // const CreatorInfo = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${process.env.REACT_APP_BASE_URL}/users/get-user/${cretorId}`
  //     );
  //   } catch (error) {
  //     console.log("error :>> ", error);
  //   }
  // };
  const getAllCourses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/course-creator/courses"
      );
      console.log("Courses:", response.data);
      setCourses(response?.data?.courses); // Update the state with fetched courses
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
            <i className="ri-search-line -ml-2 bg-black px-4 py-2 rounded-tr-md rounded-br-md text-white shadow-[0_2px_10px_10px_rgba(0,0,0,0.1)] hover:bg-gray-400 hover:text-black text-sm"></i>
          </span>
        </div>
        <div className="grid grid-cols-10 justify-center items-center col-span-10 col-start-4 px-8 py-8 gap-4">
          {/* {categories.map((element) => ( */}
          <button
            className="flex col-span-2 justify-center px-2 py-2 rounded-sm active:bg-black active:text-white hover:bg-gray-700 hover:text-white items-center bg-black text-white font-extralight text-sm focus:bg-black focus:text-white"
            //     :
            // "flex col-span-2 justify-center mx-2 px-2 py-2 rounded-sm active:bg-black active:text-white hover:bg-gray-700 hover:text-white items-center bg-gray-200 text-gray-700 font-extralight text-sm focus:bg-black focus:text-white w-16"
            // //
            // onClick={""}
          >
            All courses
          </button>

          <select className="flex col-span-2 px-2 py-2 rounded-sm  items-center bg-gray-300 text-black font-extralight text-sm">
            <option>Select Price</option>
            <option>Rs.300</option>
            <option>Rs.300</option>
            <option>Rs.300</option>
          </select>

          <select
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
            className="flex col-span-2 px-2 py-2 rounded-sm  items-center bg-gray-300 text-black font-extralight text-sm"
          >
            <option>select a category</option>

            {category?.map((cats) => (
              <option selected value={cats._id} className="text-gray">
                {cats?.name}
              </option>
            ))}
          </select>
        </div>
        <span className="grid col-span-10 col-start-2 border-b-[1px] border-[#3483b428]"></span>

        <div className="grid grid-cols-12 col-span-12 col-start-1 col-end-13 justify-center items-center px-2 py-2 gap-4 my-8">
          <div className="grid grid-cols-12 col-span-12 col-start-1 justify-center gap-4 items-center my-8 mx-8">
            {courses?.map((course) => (
              <Link
                to={`/learner-course-details-page/${course?._id}`}
                className="grid col-span-3 px-4 py-4 bg-white border-2 border-gray-100 shadow-2xl shadow-gray-400 rounded-md transition ease-in delay-0 hover:-translate-y-2 duration:1000"
                key={course?._id}
              >
                {/* {element.courseCard.map((ele) => ( */}
                <div className="flex flex-col">
                  <img
                    alt="image"
                    // src="https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                    src={`http://localhost:5000/${course.coverImage}`}

                    
                    // src={`http://localhost:5000/${course?.coverImage.replace("public\\public\\course-images\\", "")}`}
                    // src={`http://localhost:5000/${course?.coverImage.replace(
                    //   "/"
                    // )}`}
                    className="w-fill h-[200px] rounded-md z-10"
                  />
                

                  <i
                    className="ri-heart-line absolute z-20 text-white my-2 mx-2"
                  ></i>
                  <div className="flex flex-row justify-between items-center my-2 border-b-[1px] border-gray-200">
                    <span className="flex text-[15px] font-extralight text-gray-400">
                      {/* <i class={insight.class}></i> */}2 stars 30 v
                      {/* {insight.stars} {insight.views} {insight.lessons} */}
                    </span>
                  </div>
                  <span className="flex text-xl text-black leading-6 my-4">
                    {course?.title} {/* {ele.courseName} */}
                  </span>
                  <div className="flex justify-between items-center ">
                    {/* {ele.info.map((e) => ( */}
                    {/* className={e.class} */}
                    <span>
                      {course?.user?.name}
                      Rs. {course?.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;

{
  /* */
}

// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import LearnerNavbar from "../components/Navbar/LearnerNavbar";

// const AllCourses = () => {
//   const [favorite, setFavorite] = useState(false);
//   const list = [
//     {
//       index: "0",
//       fav: false,
//       category: "Development",
//       courseCard: [
//         {
//           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//           insights: [
//             { stars: "8", class: "ri-star-line text-yellow-500 text-base" },
//             // { views: "12", class: "ri-eye-line text-red-500" },
//             // { lessons: "4", class: "ri-play-circle-line text-green-500" },
//           ],
//           courseName: "Introduction to Python Programming",
//           info: [
//             {
//               instructor: "Dr. Hemant Sharma",
//               class: "text-gray-400 font-extralight text-sm",
//             },
//             // {
//             //   actPrice: "$456",
//             //   class: "text-gray-400 text-sm font-extralight line-through",
//             // },
//             {
//               disPrice: "$100",
//               class: "text-xl font-semibold text-orange-300",
//             },
//           ],
//         },
//       ],
//       to: "/path",
//     },
//     {
//       index: "0",
//       fav: false,
//       category: "Development",
//       courseCard: [
//         {
//           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//           insights: [
//             { stars: "8", class: "ri-star-line text-yellow-500 text-base" },
//             // { views: "12", class: "ri-eye-line text-red-500" },
//             // { lessons: "4", class: "ri-play-circle-line text-green-500" },
//           ],
//           courseName: "Introduction to Python Programming",
//           info: [
//             {
//               instructor: "Dr. Hemant Sharma",
//               class: "text-gray-400 font-extralight text-sm",
//             },
//             // {
//             //   actPrice: "$456",
//             //   class: "text-gray-400 text-sm font-extralight line-through",
//             // },
//             {
//               disPrice: "$100",
//               class: "text-xl font-semibold text-orange-300",
//             },
//           ],
//         },
//       ],
//       to: "/path",
//     },
//     {
//       index: "0",
//       fav: false,
//       category: "Development",
//       courseCard: [
//         {
//           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//           insights: [
//             { stars: "8", class: "ri-star-line text-yellow-500 text-base" },
//             // { views: "12", class: "ri-eye-line text-red-500" },
//             // { lessons: "4", class: "ri-play-circle-line text-green-500" },
//           ],
//           courseName: "Introduction to Python Programming",
//           info: [
//             {
//               instructor: "Dr. Hemant Sharma",
//               class: "text-gray-400 font-extralight text-sm",
//             },
//             // {
//             //   actPrice: "$456",
//             //   class: "text-gray-400 text-sm font-extralight line-through",
//             // },
//             {
//               disPrice: "$100",
//               class: "text-xl font-semibold text-orange-300",
//             },
//           ],
//         },
//       ],
//       to: "/path",
//     },
//     {
//       index: "0",
//       fav: false,
//       category: "Development",
//       courseCard: [
//         {
//           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//           insights: [
//             { stars: "8", class: "ri-star-line text-yellow-500 text-base" },
//             // { views: "12", class: "ri-eye-line text-red-500" },
//             // { lessons: "4", class: "ri-play-circle-line text-green-500" },
//           ],
//           courseName: "Introduction to Python Programming",
//           info: [
//             {
//               instructor: "Dr. Hemant Sharma",
//               class: "text-gray-400 font-extralight text-sm",
//             },
//             // {
//             //   actPrice: "$456",
//             //   class: "text-gray-400 text-sm font-extralight line-through",
//             // },
//             {
//               disPrice: "$100",
//               class: "text-xl font-semibold text-orange-300",
//             },
//           ],
//         },
//       ],
//       to: "/path",
//     },
//     {
//       index: "0",
//       fav: false,
//       category: "Development",
//       courseCard: [
//         {
//           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//           insights: [
//             { stars: "8", class: "ri-star-line text-yellow-500 text-base" },
//             // { views: "12", class: "ri-eye-line text-red-500" },
//             // { lessons: "4", class: "ri-play-circle-line text-green-500" },
//           ],
//           courseName: "Introduction to Python Programming",
//           info: [
//             {
//               instructor: "Dr. Hemant Sharma",
//               class: "text-gray-400 font-extralight text-sm",
//             },
//             // {
//             //   actPrice: "$456",
//             //   class: "text-gray-400 text-sm font-extralight line-through",
//             // },
//             {
//               disPrice: "$100",
//               class: "text-xl font-semibold text-orange-300",
//             },
//           ],
//         },
//       ],
//       to: "/path",
//     },
//     {
//       index: "0",
//       fav: false,
//       category: "Development",
//       courseCard: [
//         {
//           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//           insights: [
//             { stars: "8", class: "ri-star-line text-yellow-500 text-base" },
//             // { views: "12", class: "ri-eye-line text-red-500" },
//             // { lessons: "4", class: "ri-play-circle-line text-green-500" },
//           ],
//           courseName: "Introduction to Python Programming",
//           info: [
//             {
//               instructor: "Dr. Hemant Sharma",
//               class: "text-gray-400 font-extralight text-sm",
//             },
//             // {
//             //   actPrice: "$456",
//             //   class: "text-gray-400 text-sm font-extralight line-through",
//             // },
//             {
//               disPrice: "$100",
//               class: "text-xl font-semibold text-orange-300",
//             },
//           ],
//         },
//       ],
//       to: "/path",
//     },
//   ];
//   // const [all , setAll] = useState(true);
//   // const [dev , setDev] = useState(false);
//   // const [dev , setDev] = useState(false);
//   // const [dev , setDev] = useState(false);
//   // const [dev , setDev] = useState(false);

//   const categories = [
//     {
//       name: "All",
//       set: true,
//       details: [
//         {
//           index: "0",
//           fav: false,
//           category: "Development",
//           courseCard: [
//             {
//               img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//               insights: [
//                 { stars: "8", class: "ri-star-line text-yellow-500 text-base" },
//                 // { views: "12", class: "ri-eye-line text-red-500" },
//                 // { lessons: "4", class: "ri-play-circle-line text-green-500" },
//               ],
//               courseName: "Introduction to Python Programming",
//               info: [
//                 {
//                   instructor: "Dr. Hemant Sharma",
//                   class: "text-gray-400 font-extralight text-sm",
//                 },
//                 // {
//                 //   actPrice: "$456",
//                 //   class: "text-gray-400 text-sm font-extralight line-through",
//                 // },
//                 {
//                   disPrice: "$100",
//                   class: "text-xl font-semibold text-orange-300",
//                 },
//               ],
//             },
//           ],
//           to: "/course-overview",
//         },
//         {
//           index: "0",
//           fav: false,
//           category: "Development",
//           courseCard: [
//             {
//               img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//               insights: [
//                 { stars: "8", class: "ri-star-line text-yellow-500 text-base" },
//                 // { views: "12", class: "ri-eye-line text-red-500" },
//                 // { lessons: "4", class: "ri-play-circle-line text-green-500" },
//               ],
//               courseName: "Introduction to Python Programming",
//               info: [
//                 {
//                   instructor: "Dr. Hemant Sharma",
//                   class: "text-gray-400 font-extralight text-sm",
//                 },
//                 // {
//                 //   actPrice: "$456",
//                 //   class: "text-gray-400 text-sm font-extralight line-through",
//                 // },
//                 {
//                   disPrice: "$100",
//                   class: "text-xl font-semibold text-orange-300",
//                 },
//               ],
//             },
//           ],
//           to: "/course-overview",
//         },
//         {
//           index: "0",
//           fav: false,
//           category: "Development",
//           courseCard: [
//             {
//               img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//               insights: [
//                 { stars: "8", class: "ri-star-line text-yellow-500 text-base" },
//                 // { views: "12", class: "ri-eye-line text-red-500" },
//                 // { lessons: "4", class: "ri-play-circle-line text-green-500" },
//               ],
//               courseName: "Introduction to Python Programming",
//               info: [
//                 {
//                   instructor: "Dr. Hemant Sharma",
//                   class: "text-gray-400 font-extralight text-sm",
//                 },
//                 // {
//                 //   actPrice: "$456",
//                 //   class: "text-gray-400 text-sm font-extralight line-through",
//                 // },
//                 {
//                   disPrice: "$100",
//                   class: "text-xl font-semibold text-orange-300",
//                 },
//               ],
//             },
//           ],
//           to: "/course-overview",
//         },
//         {
//           index: "0",
//           fav: false,
//           category: "Development",
//           courseCard: [
//             {
//               img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//               insights: [
//                 { stars: "8", class: "ri-star-line text-yellow-500 text-base" },
//                 // { views: "12", class: "ri-eye-line text-red-500" },
//                 // { lessons: "4", class: "ri-play-circle-line text-green-500" },
//               ],
//               courseName: "Introduction to Python Programming",
//               info: [
//                 {
//                   instructor: "Dr. Hemant Sharma",
//                   class: "text-gray-400 font-extralight text-sm",
//                 },
//                 // {
//                 //   actPrice: "$456",
//                 //   class: "text-gray-400 text-sm font-extralight line-through",
//                 // },
//                 {
//                   disPrice: "$100",
//                   class: "text-xl font-semibold text-orange-300",
//                 },
//               ],
//             },
//           ],
//           to: "/course-overview",
//         },
//         {
//           index: "0",
//           fav: false,
//           category: "Development",
//           courseCard: [
//             {
//               img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//               insights: [
//                 { stars: "8", class: "ri-star-line text-yellow-500 text-base" },
//                 // { views: "12", class: "ri-eye-line text-red-500" },
//                 // { lessons: "4", class: "ri-play-circle-line text-green-500" },
//               ],
//               courseName: "Introduction to Python Programming",
//               info: [
//                 {
//                   instructor: "Dr. Hemant Sharma",
//                   class: "text-gray-400 font-extralight text-sm",
//                 },
//                 // {
//                 //   actPrice: "$456",
//                 //   class: "text-gray-400 text-sm font-extralight line-through",
//                 // },
//                 {
//                   disPrice: "$100",
//                   class: "text-xl font-semibold text-orange-300",
//                 },
//               ],
//             },
//           ],
//           to: "/course-overview",
//         },
//         {
//           index: "0",
//           fav: false,
//           category: "Development",
//           courseCard: [
//             {
//               img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//               insights: [
//                 { stars: "8", class: "ri-star-line text-yellow-500 text-base" },
//                 // { views: "12", class: "ri-eye-line text-red-500" },
//                 // { lessons: "4", class: "ri-play-circle-line text-green-500" },
//               ],
//               courseName: "Introduction to Python Programming",
//               info: [
//                 {
//                   instructor: "Dr. Hemant Sharma",
//                   class: "text-gray-400 font-extralight text-sm",
//                 },
//                 // {
//                 //   actPrice: "$456",
//                 //   class: "text-gray-400 text-sm font-extralight line-through",
//                 // },
//                 {
//                   disPrice: "$100",
//                   class: "text-xl font-semibold text-orange-300",
//                 },
//               ],
//             },
//           ],
//           to: "/course-overview",
//         },
//       ],
//     },
//     // {
//     //   // name: "Design",
//     //   set: false,
//     //   details: [
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Figma Tutorial",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Figma Tutorial",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Figma Tutorial",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Figma Tutorial",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Figma Tutorial",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Figma Tutorial",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //   ],
//     // },
//     // {
//     //   // name: "Marketing",
//     //   set: false,
//     //   details: [
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Introduction to Python Programming",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Introduction to Python Programming",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Introduction to Python Programming",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Introduction to Python Programming",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Introduction to Python Programming",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Introduction to Python Programming",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //   ],
//     // },
//     // {
//     //   // name: "Management",
//     //   set: false,
//     //   details: [
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Introduction to Python Programming",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Introduction to Python Programming",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Introduction to Python Programming",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Introduction to Python Programming",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Introduction to Python Programming",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //     {
//     //       index: "0",
//     //       fav: false,
//     //       category: "Development",
//     //       courseCard: [
//     //         {
//     //           img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     //           insights: [
//     //             { stars: "8", class: "ri-star-line text-yellow-500" },
//     //             { views: "12", class: "ri-eye-line text-red-500" },
//     //             { lessons: "4", class: "ri-play-circle-line text-green-500" },
//     //           ],
//     //           courseName: "Introduction to Python Programming",
//     //           info: [
//     //             {
//     //               instructor: "Dr. Hemant Sharma",
//     //               class: "text-gray-400 font-extralight text-sm",
//     //             },
//     //             {
//     //               actPrice: "$456",
//     //               class: "text-gray-400 text-sm font-extralight line-through",
//     //             },
//     //             {
//     //               disPrice: "$100",
//     //               class: "text-xl font-semibold text-orange-300",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //       to: "/path",
//     //     },
//     //   ],
//     // },
//   ];

//   // const focusLabelMap=[{All :true} , {Design:false} , {Marketing:false} , {Management:false}];
//   const [container, setContainer] = useState(categories[0].details);
//   // const [focusLabel, setFocusLabel] = useState(focusLabelMap);
//   const [light, setLight] = useState(true);
//   const [unlight, setUnlight] = useState(false);
//   function filterFunction(val) {
//     if (
//       val != "All" &&
//       (val === "Design" || val === "Marketing" || val === "Management")
//     ) {
//       setLight(false);
//       setUnlight(true);
//     }
//     for (let i = 0; i < categories.length; i++) {
//       if (categories[i].name === val) {
//         setContainer(categories[i].details);
//         break;
//         // categories[ i ].set = true;
//         // focusLabelMap[ i ] = true;
//       }
//       // categories[ i ].set = false ;
//       // focusLabelMap[ i ] = false ;
//     }
//     // setFocusLabel()
//     // setFocusLabel(focusLabelMap);
//   }
//   useEffect(() => {
//     setLight(true);
//     setUnlight(false);
//   }, []);

//   return (
//     <div>
//       <LearnerNavbar />
//       <div className="grid grid-cols-12 justify-center items-center bg-blue-50 bg-opacity-30">
//         <div className="grid grid-cols-10 justify-center items-center col-span-12 px-20 py-20 rounded-sm bg-blue-100 bg-opacity-50">
//           <span className="flex col-span-6 text-3xl font-bold">Courses</span>
//           <span className="flex col-span-2 col-start-12">
//             <input
//               id="search"
//               type="search"
//               placeholder="search here..."
//               className="flex bg-white text-gray-500 font-thin px-2 py-2 hover:shadow-[0_0px_12px_12px_rgba(0,0,0,0.2)] rounded-md border-gray-100 shadow-[0_2px_10px_10px_rgba(0,0,0,0.1)] text-xs w-[300px]"
//             />
//             <i className="ri-search-line -ml-2 bg-black px-4 py-2 rounded-tr-md rounded-br-md text-white shadow-[0_2px_10px_10px_rgba(0,0,0,0.1)] hover:bg-gray-400 hover:text-black text-sm"></i>
//           </span>
//         </div>
//         <div className="grid grid-cols-10 justify-center items-center col-span-10 col-start-4 px-8 py-8">
//           {categories.map((element) => (
//             <button
//               className={
//                 element.name === "All" && light === true && unlight != true
//                   ? "flex col-span-2 justify-center mx-2 px-2 py-2 rounded-sm active:bg-black active:text-white hover:bg-gray-700 hover:text-white items-center bg-black text-white font-extralight text-sm focus:bg-black focus:text-white w-16"
//                   : "flex col-span-2 justify-center mx-2 px-2 py-2 rounded-sm active:bg-black active:text-white hover:bg-gray-700 hover:text-white items-center bg-gray-200 text-gray-700 font-extralight text-sm focus:bg-black focus:text-white w-16"
//               }
//               onClick={() => filterFunction(element.name)}
//             >
//               {element.name}
//             </button>
//           ))}
//           <select className="ml-[-80px] flex col-span-2 justify-center mx-2 px-2 py-2 rounded-sm  items-center bg-gray-300 text-black font-extralight text-sm w-[200px]">
//             <option>Price</option>
//             <option>$300</option>
//             <option>$300</option>
//             <option>$300</option>
//           </select>

//           <select className="ml-[-30px] flex col-span-2 justify-center mx-8 px-2 py-2 rounded-sm  items-center bg-gray-300 text-black font-extralight text-sm w-[200px]">
//             <option>Category</option>
//             <option>Design</option>
//             <option>Marketing</option>
//             <option>Management</option>
//           </select>
//         </div>
//         <span className="grid col-span-10 col-start-2 border-b-[1px] border-[#3483b428]"></span>

//         <div className="grid grid-cols-12 col-span-12 col-start-1 col-end-13 justify-center items-center px-2 py-2 gap-4 my-8">
//           <div className="grid grid-cols-12 col-span-12 col-start-1 justify-center gap-4 items-center my-8 mx-8">
//             {container.map((element) => (
//               <Link
//                 to={element.to}
//                 className="flex flex-col col-span-3 px-4 py-4 bg-white border-2 border-gray-100 shadow-2xl shadow-gray-400 rounded-md transition ease-in delay-0 hover:-translate-y-2 duration:1000"
//               >
//                 {/* {element.category} */}

//                 {element.courseCard.map((ele) => (
//                   <div className="flex flex-col">
//                     <img src={ele.img} className="w-fill rounded-md z-10" />
//                     <i
//                       className="ri-heart-line absolute z-20 text-white my-2 mx-2"
//                       onClick={() => setFavorite(ele.fav)}
//                     ></i>
//                     <div className="flex flex-row justify-between items-center my-2 border-b-[1px] border-gray-200">
//                       {ele.insights.map((insight) => (
//                         <span className="flex text-[15px] font-extralight text-gray-400">
//                           <i class={insight.class}></i>
//                           {insight.stars} {insight.views} {insight.lessons}
//                         </span>
//                       ))}
//                     </div>
//                     <span className="flex text-xl text-black leading-6 my-4">
//                       {ele.courseName}
//                     </span>
//                     <div className="flex justify-between items-center ">
//                       {ele.info.map((e) => (
//                         <span className={e.class}>
//                           {e.instructor}
//                           {e.actPrice}
//                           {e.disPrice}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllCourses;
