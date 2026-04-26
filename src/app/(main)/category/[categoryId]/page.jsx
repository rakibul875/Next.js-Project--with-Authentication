import LeftSideBar from "@/components/HomePage/news/LeftSideBar";
import RightSideBar from "@/components/HomePage/news/RightSideBar";

import React from "react";

const getCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};
const getCategoryNews = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
};

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
        <div className="bg-red-300 col-span-6">
          <h1>All News</h1>
          <div className="">
            {news.map((n) => (
              <div key={n._id}>{n.title}</div>
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
