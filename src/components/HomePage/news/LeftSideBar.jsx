import Link from "next/link";
import React from "react";

const LeftSideBar = ({ category, activeId }) => {
  return (
    <div>
      <ul className="flex flex-col gap-2 text-center mt-5">
        {category.news_category.map((category) => (
          <li className={`${activeId===category.category_id &&'bg-slate-100 font-bold'}`} key={category.category_id}>
            <Link className="block p-2" href={`/category/${category.category_id}`}>{category.category_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
