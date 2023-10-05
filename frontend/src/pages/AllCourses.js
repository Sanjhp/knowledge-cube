import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllCourses = () => {
  const [favorite, setFavorite] = useState(false);
  const list = [
    {
      index: "0",
      fav: false,
      category: "Development",
      courseCard: [
        {
          img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
          insights: [
            { stars: "8", class: "ri-star-line text-yellow-500" },
            { views: "12", class: "ri-eye-line text-red-500" },
            { lessons: "4", class: "ri-play-circle-line text-green-500" },
          ],
          courseName: "Introduction to Python Programming",
          info: [
            {
              instructor: "Dr. Hemant Sharma",
              class: "text-gray-400 font-extralight text-sm",
            },
            {
              actPrice: "$456",
              class: "text-gray-400 text-sm font-extralight line-through",
            },
            {
              disPrice: "$100",
              class: "text-xl font-semibold text-orange-300",
            },
          ],
        },
      ],
      to: "/path",
    },
    {
      index: "0",
      fav: false,
      category: "Development",
      courseCard: [
        {
          img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
          insights: [
            { stars: "8", class: "ri-star-line text-yellow-500" },
            { views: "12", class: "ri-eye-line text-red-500" },
            { lessons: "4", class: "ri-play-circle-line text-green-500" },
          ],
          courseName: "Introduction to Python Programming",
          info: [
            {
              instructor: "Dr. Hemant Sharma",
              class: "text-gray-400 font-extralight text-sm",
            },
            {
              actPrice: "$456",
              class: "text-gray-400 text-sm font-extralight line-through",
            },
            {
              disPrice: "$100",
              class: "text-xl font-semibold text-orange-300",
            },
          ],
        },
      ],
      to: "/path",
    },
    {
      index: "0",
      fav: false,
      category: "Development",
      courseCard: [
        {
          img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
          insights: [
            { stars: "8", class: "ri-star-line text-yellow-500" },
            { views: "12", class: "ri-eye-line text-red-500" },
            { lessons: "4", class: "ri-play-circle-line text-green-500" },
          ],
          courseName: "Introduction to Python Programming",
          info: [
            {
              instructor: "Dr. Hemant Sharma",
              class: "text-gray-400 font-extralight text-sm",
            },
            {
              actPrice: "$456",
              class: "text-gray-400 text-sm font-extralight line-through",
            },
            {
              disPrice: "$100",
              class: "text-xl font-semibold text-orange-300",
            },
          ],
        },
      ],
      to: "/path",
    },
    {
      index: "0",
      fav: false,
      category: "Development",
      courseCard: [
        {
          img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
          insights: [
            { stars: "8", class: "ri-star-line text-yellow-500" },
            { views: "12", class: "ri-eye-line text-red-500" },
            { lessons: "4", class: "ri-play-circle-line text-green-500" },
          ],
          courseName: "Introduction to Python Programming",
          info: [
            {
              instructor: "Dr. Hemant Sharma",
              class: "text-gray-400 font-extralight text-sm",
            },
            {
              actPrice: "$456",
              class: "text-gray-400 text-sm font-extralight line-through",
            },
            {
              disPrice: "$100",
              class: "text-xl font-semibold text-orange-300",
            },
          ],
        },
      ],
      to: "/path",
    },
    {
      index: "0",
      fav: false,
      category: "Development",
      courseCard: [
        {
          img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
          insights: [
            { stars: "8", class: "ri-star-line text-yellow-500" },
            { views: "12", class: "ri-eye-line text-red-500" },
            { lessons: "4", class: "ri-play-circle-line text-green-500" },
          ],
          courseName: "Introduction to Python Programming",
          info: [
            {
              instructor: "Dr. Hemant Sharma",
              class: "text-gray-400 font-extralight text-sm",
            },
            {
              actPrice: "$456",
              class: "text-gray-400 text-sm font-extralight line-through",
            },
            {
              disPrice: "$100",
              class: "text-xl font-semibold text-orange-300",
            },
          ],
        },
      ],
      to: "/path",
    },
    {
      index: "0",
      fav: false,
      category: "Development",
      courseCard: [
        {
          img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
          insights: [
            { stars: "8", class: "ri-star-line text-yellow-500" },
            { views: "12", class: "ri-eye-line text-red-500" },
            { lessons: "4", class: "ri-play-circle-line text-green-500" },
          ],
          courseName: "Introduction to Python Programming",
          info: [
            {
              instructor: "Dr. Hemant Sharma",
              class: "text-gray-400 font-extralight text-sm",
            },
            {
              actPrice: "$456",
              class: "text-gray-400 text-sm font-extralight line-through",
            },
            {
              disPrice: "$100",
              class: "text-xl font-semibold text-orange-300",
            },
          ],
        },
      ],
      to: "/path",
    },
  ];
  // const [all , setAll] = useState(true);
  // const [dev , setDev] = useState(false);
  // const [dev , setDev] = useState(false);
  // const [dev , setDev] = useState(false);
  // const [dev , setDev] = useState(false);

  const categories = [
    {
      name: "All",
      set: true,
      details: [
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
      ],
    },
    {
      name: "Design",
      set: false,
      details: [
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Figma Tutorial",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Figma Tutorial",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Figma Tutorial",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Figma Tutorial",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Figma Tutorial",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Figma Tutorial",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
      ],
    },
    {
      name: "Marketing",
      set: false,
      details: [
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
      ],
    },
    {
      name: "Management",
      set: false,
      details: [
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
        {
          index: "0",
          fav: false,
          category: "Development",
          courseCard: [
            {
              img: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
              insights: [
                { stars: "8", class: "ri-star-line text-yellow-500" },
                { views: "12", class: "ri-eye-line text-red-500" },
                { lessons: "4", class: "ri-play-circle-line text-green-500" },
              ],
              courseName: "Introduction to Python Programming",
              info: [
                {
                  instructor: "Dr. Hemant Sharma",
                  class: "text-gray-400 font-extralight text-sm",
                },
                {
                  actPrice: "$456",
                  class: "text-gray-400 text-sm font-extralight line-through",
                },
                {
                  disPrice: "$100",
                  class: "text-xl font-semibold text-orange-300",
                },
              ],
            },
          ],
          to: "/path",
        },
      ],
    },
  ];
  
  // const focusLabelMap=[{All :true} , {Design:false} , {Marketing:false} , {Management:false}];
  const [container, setContainer] = useState(categories[0].details);
  // const [focusLabel, setFocusLabel] = useState(focusLabelMap);
  function filterFunction(val) {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].name === val) {
        setContainer(categories[i].details);
        break;
        // categories[ i ].set = true;
        // focusLabelMap[ i ] = true;
      } 
      // categories[ i ].set = false ;
      // focusLabelMap[ i ] = false ;
    }
    // setFocusLabel()
    // setFocusLabel(focusLabelMap);
    
  }
  
  return (
    <div className="grid grid-cols-12 justify-center items-center bg-blue-50 bg-opacity-30">
      <div className="grid grid-cols-10 justify-center items-center col-span-12 px-20 py-20 rounded-sm bg-blue-100 bg-opacity-50">
        <span className="flex col-span-6 text-3xl font-bold">Courses</span>
        <span className="flex col-span-2 col-start-12">
          <input
            id="search"
            type="search"
            placeholder="search here..."
            className="flex bg-white text-gray-500 font-thin px-2 py-2 hover:shadow-[0_0px_12px_12px_rgba(0,0,0,0.2)] rounded-md border-gray-100 shadow-[0_2px_10px_10px_rgba(0,0,0,0.1)] text-xs"
          />
          <i class="ri-search-line -ml-2 bg-black px-4 py-2 rounded-tr-md rounded-br-md text-white shadow-[0_2px_10px_10px_rgba(0,0,0,0.1)] hover:bg-gray-400 hover:text-black text-sm"></i>
        </span>
      </div>
      <div className="grid grid-cols-10 justify-center items-center col-span-6 col-start-4 px-8 py-8">
        {categories.map((element) => (
          <button
            className={
              "flex col-span-2 justify-center mx-2 px-2 py-2 rounded-sm active:bg-black active:text-white hover:bg-gray-700 hover:text-white items-center bg-gray-200 text-gray-700 font-extralight text-sm focus:bg-black focus:text-white"
            }
            onClick={() => filterFunction(element.name)}
          >
            {element.name}
          </button>
        ))}
      </div>
      <span className="grid col-span-10 col-start-2 border-b-[1px] border-[#3483b428]"></span>

      <div className="grid grid-cols-12 col-span-12 col-start-1 col-end-13 justify-center items-center px-2 py-2 gap-4 my-8">
        <div className="grid grid-cols-12 col-span-12 col-start-1 justify-center gap-4 items-center my-8 mx-8">
          {container.map((element) => (
            <Link
              to={element.to}
              className="flex flex-col col-span-3 px-4 py-4 bg-white border-2 border-gray-100 shadow-2xl shadow-gray-400 rounded-md transition ease-in delay-0 hover:-translate-y-2 duration:1000"
            >
              {/* {element.category} */}

              {element.courseCard.map((ele) => (
                <div className="flex flex-col">
                  <img src={ele.img} className="w-fill rounded-md z-10" />
                  <i
                    class="ri-heart-line absolute z-20 text-white my-2 mx-2"
                    onClick={() => setFavorite(ele.fav)}
                  ></i>
                  <div className="flex flex-row justify-between items-center my-2 border-b-[1px] border-gray-200">
                    {ele.insights.map((insight) => (
                      <span className="flex text-[15px] font-extralight text-gray-400">
                        <i class={insight.class}></i>
                        {insight.stars} {insight.views} {insight.lessons}
                      </span>
                    ))}
                  </div>
                  <span className="flex text-xl text-black leading-6 my-4">
                    {ele.courseName}
                  </span>
                  <div className="flex justify-between items-center ">
                    {ele.info.map((e) => (
                      <span className={e.class}>
                        {e.instructor}
                        {e.actPrice}
                        {e.disPrice}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
