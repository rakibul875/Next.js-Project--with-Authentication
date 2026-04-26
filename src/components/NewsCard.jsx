import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const NewsCard = ({ news }) => {
  return (
    <div className="mt-5 p-3">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between bg-gray-200 p-4 items-center rounded-xl">
            <div className="flex gap-2">
              <Image
                className="rounded-full"
                src={news.author.img}
                alt="hello"
                height={40}
                width={40}
              />
              <div className="">
                <h1>{news.author.name}</h1>
                <p>{news.author.published_date}</p>
              </div>
            </div>
            <div className="">
              <div className="flex text-2xl font-bold">
                <CiBookmark />
                <CiShare2 />
              </div>
            </div>
          </div>
          <h2 className="card-title">{news.title}</h2>
        </div>
        <figure>
          <Image
            src={news.image_url}
            alt="thumbnail"
            width={300}
            height={300}
            className="w-full p-4"
          />
        </figure>
        <p className="line-clamp-3 mb-3 px-4">{news.details}</p>
        <Link href={`/news/${news._id}`}>
          <button className="btn bg-red-100 w-40 rounded-xl mx-5 mb-3">
            Read More...
          </button>
        </Link>
        <span className="border border-t-2 border-gray-200 my-3 mx-4"></span>
        <div className="flex justify-between items-center mx-4 my-2">
          <p className="flex items-center gap-2">
            <IoIosStar className="text-2xl text-yellow-500" />{" "}
            <IoIosStar className="text-2xl text-yellow-500" />{" "}
            <IoIosStar className="text-2xl text-yellow-500" />
            {news.rating.number}
          </p>
          <p className="flex items-center gap-2">
            <FaEye className="text-2xl" />
            {news.total_view}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
