import React from "react";
import { Link } from "react-router-dom";
import CreatorNavbar from "../components/Navbar/CreatorNavbar";

const CreaterDashboard = () => {
  const stats = [
    {
      star: "1.4k",
    },
  ];
  const card = [
    {
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668638804974-b0053235b8f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
      course: "Inroduction to Python Programming",
      enrollments: "124",
      ratings: "4.50",
    },

    {
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668638804974-b0053235b8f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
      course: "Introduction to Java",
      enrollments: "124",
      ratings: "4.50",
    },

    {
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668638804974-b0053235b8f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
      course: "Introduction to C++",
      enrollments: "124",
      ratings: "4.50",
    },

    {
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668638804974-b0053235b8f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
      course: "Data Structure and Algorithm",
      enrollments: "124",
      ratings: "4.50",
    },
  ];
  return (
    <div>
      <CreatorNavbar />
      <div className="min-[300px]:grid min-[300px]:grid-rows-1 min-[300px]:justify-center min-[300px]:items-center max-[639px]:grid max-[639px]:grid-rows-1 max-[639px]:justify-center max-[639px]:items-center sm:grid sm:grid-rows-1 sm:justify-center sm:items-center md:grid md:grid-rows-1 md:justify-center md:items-center lg:grid lg:grid-cols-12 lg:justify-center lg:items-center">
        <div className="min-[300px]:grid min-[300px]:grid-rows-1 min-[300px]:justify-center min-[300px]:items-center max-[639px]:grid max-[639px]:grid-rows-1 max-[639px]:justify-center max-[639px]:items-center sm:grid sm:grid-rows-1 sm:justify-center sm:items-center md:grid md:grid-rows-1 md:justify-center md:items-center lg:grid lg:grid-cols-12 lg:justify-center lg:items-center gap-8 pt-8 px-4 min-[300px]:col-start-3 lg:col-start-1 min-[300px]:col-span-4 max-[639px]:col-span-4 sm:col-span-10 md:col-span-10 lg:col-span-10">
          <div className="grid min-[300px]:col-span-4 max-[640px]:col-span-4 sm:col-span-3 md:col-span-3 lg:col-span-2 bg-white shadow-gray-400 shadow-2xl px-2 py-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
              className="w-fill"
            />
          </div>
          <div className="grid grid-cols-12 col-span-9 justify-center items-center">
            <div className="grid grid-cols-12 col-span-12 justify-center items-center">
              <div className="grid grid-rows-2 col-start-1 col-span-10">
                <span className="text-3xl col-span-10">Jenna Ortego</span>
                <span className="text-sm text-gray-300 col-span-3">
                  Art Illustrator
                </span>
              </div>
            </div>

            <div className="grid grid-cols-12 col-span-12">
              <span className="text-sm text-gray-400 col-span-12">
                Exercitation est consectetur amet Lorem adipisicing mollit
                reprehenderit excepteur culpa voluptate labore nulla. Magna
                veniam sunt nisi sint reprehenderit aute quis.Qui velit irure
                adipisicing duis. Exercitation est consectetur amet Lorem
                adipisicing mollit reprehenderit excepteur culpa voluptate
                labore nulla. Magna veniam sunt nisi sint reprehenderit aute
                quis.Qui velit irure adipisicing duis.
              </span>
              <div className="col-span-8">
                {stats.map((element) => (
                  <div className="grid grid-cols-12 col-span-8">
                    <span className="flex col-span-3 col-start-1">
                      <i className="ri-star-line text-yellow-500 text-xl"></i>{" "}
                      {element.star}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 col-span-12 mt-16 px-16 py-8 border-t-[1px] border-gray-100">
          <span className="flex col-span-10 col-start-1">
            <input
              id="search"
              type="search"
              placeholder="search here..."
              className="min-[300px]:hidden max-[639px]:hidden sm:flex md:flex lg:flex bg-white text-gray-500 font-thin px-2 py-2 hover:shadow-[0_0px_12px_12px_rgba(0,0,0,0.2)] rounded-md border-gray-100 shadow-[0_2px_10px_10px_rgba(0,0,0,0.1)] text-xs w-[300px]"
            />
            <i className="ri-search-line min-[300px]:-ml-8 lg:-ml-2 bg-black px-4 py-2 min-[300px]:rounded-sm max-[639px]:rounded-sm sm:rounded-tr-md md:rounded-tr-md lg:rounded-tr-md sm:rounded-br-md md:rounded-br-md lg:rounded-br-md text-white shadow-[0_2px_10px_10px_rgba(0,0,0,0.1)] hover:bg-gray-400 hover:text-black text-xs"></i>
          </span>

          <div className="bg-black border-black border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-black hover:border-black hover:border-2 hover:border-solid w-32 min-[300px]:-ml-8 sm:ml-0">
            <Link
              to="/upload-course"
              className="flex flex-row justify-center items-center text-xs"
            >
              New Course
            </Link>
          </div>
        </div>
        <div className="min-[300px]:grid min-[639px]:grid-rows-1 lg:grid lg:grid-cols-12 col-span-12 my-4 gap-4 px-16">
          {card.map((element) => (
            <div className="min-[300px]:grid min-[639px]:grid-rows-1 lg:grid lg:grid-cols-12 col-span-12 shadow-gray-300 shadow-sm rounded-sm px-2 py-2 justify-center items-center gap-4">
              <div className="grid min-[300px]:col-span-10 lg:col-span-1">
                <img
                  src={element.thumbnail}
                  className="min-[300px]:w-fill lg:w-fill rounded-md"
                />
              </div>
              <div className="grid min-[300px]:grid-rows-1 min-[300px]:col-span-4 lg:grid-cols-12 lg:col-span-12">
                <div className="grid min-[300px]:grid-cols-4 lg:grid-rows-2 col-span-4 items-center gap-8">
                  <span className="text-xl font-semibold col-span-6">
                    {element.course}
                  </span>
                  <div className="grid grid-cols-4 col-span-4 gap-4 items-center">
                    <span className="bg-purple-600 text-white px-[1px] py-[1px] text-xs col-span-1 uppercase text-center rounded-full min-[300px]:col-span-3 sm:col-span-1">
                      live
                    </span>
                    <span className="col-span-3 text-base min-[300px]:hidden">
                      only for your organisation
                    </span>
                  </div>
                </div>
                <div className="grid justify-center items-center col-span-2">
                  <div className="text-4xl">{element.enrollments}</div>
                  <span className="text-sm font-thin">
                    enrollments this month
                  </span>
                </div>
                <div className="grid justify-center items-center col-span-2">
                  <div className="text-4xl">{element.ratings}</div>

                  <div className="grid grid-cols-4 col-span-4">
                    <i className="ri-star-fill text-lg text-yellow-300"></i>
                    <i className="ri-star-fill text-lg text-yellow-300"></i>
                    <i className="ri-star-fill text-lg text-yellow-300"></i>
                  </div>

                  <span className="text-sm font-thin">ratings</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreaterDashboard;
