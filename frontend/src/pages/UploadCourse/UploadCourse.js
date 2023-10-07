import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreatorNavbar from "../../components/Navbar/CreatorNavbar";

const UploadCourse = () => {
  const list = [
    { name: "Dashbaord", to: "/dshboard", icon: "ri-profile-fill mx-2" },
    { name: "About", to: "/about", icon: "ri-user-3-line mx-2" },
    { name: "Comments", to: "/comments", icon: "ri-chat-1-line mx-2" },
    { name: "Messages", to: "/messages", icon: "ri-message-3-line mx-2" },
    { name: "Logout", to: "/logout", icon: "ri-logout-circle-r-line mx-2" },
  ];
  const username = "Samantha";
  const LanguageOptions = [
    { key: "English", element: "English" },
    { key: "Hindi", element: "Hindi" },
    { key: "Telugu", element: "Telugu" },
  ];
  const SkillOptions = [
    { key: "English", element: "English" },
    { key: "Hindi", element: "Hindi" },
    { key: "Telugu", element: "Telugu" },
  ];
  // const [count, setCount] = useState([1]);
  const [val, setVal] = useState([]);
  var count = 1 ;
  function handleAdd() {
    count=count+1;
    const abc = [...val, []];
    setVal(abc);
    // const count2 = count[count.length - 1] + 1;
    // setCount(count2);
  }
  function handleChange() {}

  return (
    <div>
      <CreatorNavbar />
      <div className="grid grid-cols-6 mb-8">
        <div className="col-span-6 flex flex-col">
          <div className="flex flex-row justify-between items-center px-8 py-8 bg-slate-200 bg-opacity-30">
            <div className="flex flex-row items-center">
              <span className="text-xl font-thin text-gray-600">
                Good Morning
                <span className="font-semibold text-[#3484B4]">
                  {" "}
                  {username}
                </span>
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mx-4"
                >
                  <path
                    stroke-linecap="round"
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
                  placeholder="type here"
                  className="px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-200"
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <span className="text-gray-500 text-sm">Description</span>
                <textarea
                  cols="10"
                  type="text"
                  placeholder="type here"
                  className="px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-200"
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
                  placeholder="type here"
                  className="px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-200 text-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <span className="text-gray-500 text-sm">Select language</span>
                  <select className="px-4 py-4 text-gray-400 bg-gray-200 rounded-xl">
                    <option selected className="text-gray">
                      Language is...
                    </option>
                    {LanguageOptions.map((elements) => (
                      <option key={elements.key}>{elements.element}</option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <span className="text-gray-500 text-sm">
                    Select skill level
                  </span>
                  <select className="px-4 py-4 text-gray-400 bg-gray-200 rounded-xl">
                    <option selected className="text-gray">
                      Skill level is...
                    </option>
                    {SkillOptions.map((elements) => (
                      <option key={elements.key}>{elements.element}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <span className="text-l font-semibold my-8 px-4">Course Content</span>
          <div className="grid grid-rows-2 gap-2 px-4 items-center">
            <div className="grid grid-cols-8 gap-8 rounded-lg shadow-md justify-center items-center px-6 py-6">
              <div className="grid col-span-1">Chapter - 1</div>
              <div className="grid col-span-2 ">
                <span className="text-gray-500">Title</span>
                <input
                  type="text"
                  className="bg-gray-200 px-2 py-2 rounded-xl"
                  placeholder="type here"
                />
              </div>
              <div className="grid col-span-5 ">
                {/* <span className="text-gray-500">Title</span> */}
                <input
                  type="file"
                  className="bg-gray-200 px-2 py-2 rounded-xl"
                  placeholder="type here"
                />
              </div>
            </div>

            {val.map((data, i) => {
              return (
                <div className="grid grid-cols-8 gap-8 rounded-lg shadow-md justify-center items-center px-6 py-6">
                  <div className="grid col-span-1">Chapter - {count}</div>
                  <div className="grid col-span-2 ">
                    <span className="text-gray-500">Title</span>
                    <input
                      type="text"
                      className="bg-gray-200 px-2 py-2 rounded-xl"
                      placeholder="type here"
                    />
                  </div>
                  <div className="grid col-span-5 ">
                    {/* <span className="text-gray-500">Title</span> */}
                    <input
                      type="file"
                      className="bg-gray-200 px-2 py-2 rounded-xl"
                      placeholder="type here"
                    />
                  </div>
                </div>
              );
            })}
            <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 my-6 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-[200px]">
              <button
                onClick={() => handleAdd()}
                className="flex flex-row justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Add Chapter
              </button>
            </div>
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
                className="bg-gray-200 px-2 py-2 rounded-xl "
              />
            </div>

            <div className="grid grid-rows-2 justify-center items-center">
              <span className="text-gray-500"> Certificate </span>
              <input
                type="file"
                placeholder="$|0.0"
                className="bg-gray-200 px-2 py-2 rounded-xl "
              />
            </div>

            <div className="grid grid-rows-2 justify-center items-center">
              <span className="text-gray-500"> Assessment </span>
              <input
                type="file"
                placeholder="$|0.0"
                className="bg-gray-200 px-2 py-2 rounded-xl "
              />
            </div>
            <div className="grid justify-center items-end mt-8">
              <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-[200px]">
                <Link
                  to="/new-course"
                  className="flex flex-row justify-center items-center"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCourse;
