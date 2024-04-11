import NewsCard from "@/components/newCard";
import React from "react";

const SideNewsCard = ({ trending }: any) => {
  return (
    <>
      <div className="text-xl font-medium mb-4">Trending 🔥</div>
      {trending?.map((item: any) => (
        <NewsCard
          key={item?._id}
          title={item.title}
          slug={item.slug}
          coverImage={item.coverImage}
          excerpt={item.excerpt}
          date={item.date}
          author={item.author}
        />
      ))}
    </>
  );
};

export default SideNewsCard;
