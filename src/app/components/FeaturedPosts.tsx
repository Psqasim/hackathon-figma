"use client"
import React from "react";
import { CiAlarmOn } from "react-icons/ci";
import { FaChartArea } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import Image from "next/image";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      link: "Google",
      link2: "Trending",
      link3: "New",
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      pic: "/Post1.jpg",
      date: "22 April 2021",
      comments: 10,
      tag: "NEW",
    },
    {
      id: 2,
      link: "Google",
      link2: "Trending",
      link3: "New",
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      pic: "/Post2.jpg",
      date: "22 April 2021",
      comments: 10,
      tag: "Trending",
    },
    {
      id: 3,
      link: "Google",
      link2: "Trending",
      link3: "New",
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      pic: "/Post3.jpg",
      date: "22 April 2021",
      comments: 10,
      tag: "Hot",
    },
  ];

  return (
    <div className="bg-white py-10 mt-28 min-h-[1044px]">
      <div className="text-center mb-8 px-4">
        <p className="text-[#23A6F0] font-semibold">Practical Advice</p>
        <h2 className="text-[40px] font-bold mt-2 text-gray-800">
          Featured Posts
        </h2>
        <p className="text-gray-500 mt-2">
          Problems trying to resolve the conflict between{" "}
          <br className="hidden sm:block" /> the two major realms of Classical
          physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mx-auto mt-20 max-w-[1200px]">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full max-w-[348px] mx-auto h-auto bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={post.pic}
                alt={post.title}
                className=" object-cover"
                layout="fill"
                
              />
              <div className="mt-8 flex flex-wrap gap-4 sm:gap-10 ml-3 font-normal leading-4">
                <p className="text-[#8EC2F2]">{post.link}</p>
                <p className="text-[#737373]">{post.link2}</p>
                <p className="text-[#737373]">{post.link3}</p>
              </div>
              <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                {post.tag}
              </span>
            </div>

            <div className="p-3">
              <h3 className="text-xl text-md font-normal leading-8 text-[#252B42]">
                {post.title}
              </h3>
              <p className="text-[#737373] font-normal leading-5 mt-5">
                {post.description}
              </p>
              <div className="flex flex-wrap justify-between items-center text-[#737373] text-xs mt-4">
                <span className="flex gap-2">
                  <CiAlarmOn className="w-4 h-4 text-[#23A6F0]" /> {post.date}
                </span>
                <span className="flex gap-2">
                  <FaChartArea className="w-4 h-4 text-[#23856D]" />
                  {post.comments} comments
                </span>
              </div>
              <a
                href="#"
                className="text-blue-500 text-xs font-medium mt-4 hover:underline flex items-center gap-3"
              >
                Learn More <FaGreaterThan className="w-3 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
