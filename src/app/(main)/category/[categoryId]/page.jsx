import LeftSideBar from "@/components/HomePage/news/LeftSideBar";
import RightSideBar from "@/components/HomePage/news/RightSideBar";
import NewsCard from "@/components/NewsCard";
import { getCategory, getCategoryNews } from "@/lib/data";

import React from "react";

const CategoryNews = async ({params}) => {
  const {categoryId} = await params;
  
  const category = await getCategory();
  const news = await getCategoryNews(categoryId);
  return (
    <div>
      <div className="container mx-auto grid grid-cols-12 gap-3">
        <div className="col-span-3">
          <h1 className="font-bold text-lg">All Category</h1>

          <LeftSideBar category={category} activeId={categoryId} />
        </div>
        <div className="col-span-6">
          <h1 className="font-bold text-lg mx-5">Category News</h1>
          <div className="">
            {news.length===0?<div>News Not found</div> :news.map((n) => (
              <NewsCard key={n._id} news={n}/>
            ))}
          </div>
        </div>
        <div className="col-span-3">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
