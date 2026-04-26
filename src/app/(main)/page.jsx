import LeftSideBar from "@/components/HomePage/news/LeftSideBar";
import RightSideBar from "@/components/HomePage/news/RightSideBar";
import Image from "next/image";

const getCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const category = await getCategory();

  return (
    <div className="container mx-auto grid grid-cols-12 gap-3">
      <div className="col-span-3">
        <h1 className="font-bold text-lg">All Category</h1>
      
        <LeftSideBar category={category} activeId={"01"}/>
        
      </div>
      <div className="bg-red-300 col-span-6">
        <h1>All News</h1>
      </div>
      <div className="col-span-3">
        <RightSideBar/>
      </div>
    </div>
  );
}
