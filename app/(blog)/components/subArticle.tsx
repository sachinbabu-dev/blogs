import NewsCard from "@/components/newCard";
import React from "react";

const SubArticle = ({ news }: any) => {
  console.log(">>>", news);
  return (
    <>
      {news?.map((item: any, index: number) => (
        <div
          key={index}
          className={`col-span-2 pt-4 ${index === 0 ? "border-r pr-2" : ""} ${
            index === 1 ? "pl-2" : ""
          } text-[12px]`}
        >
          {item.title}
        </div>
      ))}
    </>
  );
};

export default SubArticle;
