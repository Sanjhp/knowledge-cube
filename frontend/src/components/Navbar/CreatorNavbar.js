import React from "react";
import { Link } from "react-router-dom";

const CreatorNavbar = ({ handleLogout }) => {
  return (
    <div className="grid grid-cols-12 px-4 justify-between items-center">
      <div className="grid grid-cols-12 col-span-12 col-start-1 px-4 py-4 justify-between items-center">
        <div className="flex flex-col mr-4">
          <img
            src="https://i.ibb.co/5MXSrg8/cropped-logo.png"
            className="w-16"
          />
        </div>
        <div className="col-span-9 ml-[90px]">
          <Link
            to="/creator-dashboard"
            className="mx-4 py-4 text-sm text-gray-600 hover:text-gray-500 hover:underline"
          >
            Dashboard
          </Link>
          <Link
            to="/upload-course"
            className="mx-4 py-4 text-sm text-gray-600 hover:text-gray-500 hover:underline"
          >
            Upload Course
          </Link>
          {/* <Link
            to="/edit-course"
            className="mx-4 py-4 text-sm text-gray-600 hover:text-gray-500 hover:underline"
          >
            Edit Course
          </Link> */}
          {/* <Link
            to="/community-chat"
            className="mx-4 py-4 text-sm text-gray-600 hover:text-gray-500 hover:underline"
          >
            Community Chat
          </Link> */}
        </div>
        <div className="bg-transparent border-gray-700 border-2 border-solid rounded-sm px-2 py-2 text-center text-black hover:text-white hover:bg-gray-700  hover:border-gray-700 hover:border-2 hover:border-solid w-[90px] col-span-1">
          <Link
            to="/profile-update"
            className="flex flex-row justify-center items-center text-xs "
          >
            <i class="ri-user-line text-black text-xs mr-4"></i>
            Profile
          </Link>
        </div>
        <div className="bg-gray-700 border-gray-700 border-2 border-solid rounded-sm px-2 py-2 text-center text-white hover:bg-gray-800  hover:border-gray-700 hover:border-2 hover:border-solid w-16 col-span-1">
          <button
            onClick={handleLogout}
            className="flex flex-row justify-center items-center text-xs"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorNavbar;
