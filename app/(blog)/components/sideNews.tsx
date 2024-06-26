import NewsCard from "@/components/newCard";
import React from "react";

const SideNewsCard = ({ news, heading }: any) => {
  console.log(">>>", news);
  return (
    <>
      {/* <div className="text-xl font-medium mb-4">{heading}</div> */}
      {news?.map((item: any, index: any) => (
        <div key={index} className={`${index === 0 ? "border-b" : ""}`}>
          <NewsCard
            key={item?._id}
            title={item.title}
            slug={item.slug}
            coverImage={item.coverImage}
            excerpt={item.excerpt}
            date={item.date}
            author={item.author}
          />
        </div>
      ))}
    </>
  );
};

export default SideNewsCard;
