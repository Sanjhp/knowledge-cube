import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="grid grid-cols-6">
      <div className="grid grid-rows-2  justify-center items-center px-12 border-r-2 border-gray-100 border-solid">
        {/* <div className="flex flex-col items-center justify-center">
          <img
            src="https://i.ibb.co/5MXSrg8/cropped-logo.png"
            className="w-16"
          />
        </div> */}
        <div className="grid grid-rows-5 gap-2">
          {list.map((element) => (
            <span className="flex pt-1 pb-4 px-8 border-b-2 border-gray-100 border-solid hover:bg-gray-200 hover:rounded-md">
              <i className={element.icon}></i>
              <Link to={element.to}>{element.name}</Link>
            </span>
          ))}
        </div>
      </div>
      <div className="col-span-5 flex flex-col px-8 py-6">
        <div className="flex flex-row justify-between items-center px-2 py-2">
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center justify-center mr-4">
              <img
                src="https://i.ibb.co/5MXSrg8/cropped-logo.png"
                className="w-16"
              />
            </div>
            <span className="text-xl font-thin text-gray-600">
              Good Morning
              <span className="font-semibold text-[#3484B4]"> {username}</span>
            </span>
          </div>
          <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-4 py-4 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-[200px]">
            <Link
              to="/new-course"
              className="flex flex-row justify-center items-center"
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
              <span className="text-gray-500 text-sm">Upload Cover Image</span>
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
                <span className="text-gray-500 text-sm">Select language</span>
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
              <span className="text-gray-500">Title</span>
              <input
                type="text"
                className="bg-gray-200 px-2 py-2 rounded-xl"
                placeholder="type here"
              />
            </div>
          </div>

          <div className="grid grid-cols-8 gap-8 rounded-lg shadow-md justify-center items-center px-6 py-6">
            <div className="grid col-span-1">Chapter - 2</div>
            <div className="grid col-span-2 ">
              <span className="text-gray-500">Title</span>
              <input
                type="text"
                className="bg-gray-200 px-2 py-2 rounded-xl"
                placeholder="type here"
              />
            </div>
            <div className="grid col-span-5">
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
              <input
                type="file"
                className="bg-gray-200 px-2 py-2 rounded-xl"
                placeholder="type here"
              />
            </div>
          </div>

          <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 my-6 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-[200px]">
            <Link
              to="/new-course"
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
            </Link>
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
            <span className="text-gray-500"> Price </span>
            <input
              type="decimal"
              placeholder="$|0.0"
              className="bg-gray-200 px-2 py-2 rounded-xl "
            />
          </div>

          <div className="grid grid-rows-2 justify-center items-center">
            <span className="text-gray-500"> Price </span>
            <input
              type="decimal"
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
  );
};

export default UploadCourse;
