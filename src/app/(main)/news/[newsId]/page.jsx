import RightSideBar from "@/components/HomePage/news/RightSideBar";
import { getNewsDetails } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const { newsId } = await params;
  const newsDetails = await getNewsDetails(newsId);
  
  return (
    <div className="grid grid-cols-12 container mx-auto">
      <div className="col-span-9">
        <div className="mt-5 p-3">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{newsDetails.title}</h2>
        </div>
        <figure>
          <Image
            src={newsDetails.image_url}
            alt="thumbnail"
            width={300}
            height={300}
            className="w-full p-4"
          />
        </figure>
        <p className="mb-3 px-4">{newsDetails.details}</p>
        <Link href={`/category/${newsDetails.category_id}`}>
          <button className="btn bg-red-100 w-60 rounded-xl mx-5 mb-3">
            All news in this category
          </button>
        </Link>
      </div>
    </div>
      </div>
      <div className="col-span-3">
        <RightSideBar/>
      </div>
    </div>
  );
};

export default page;
