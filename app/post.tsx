import { AlbumArtwork } from "@/components/album-artwork";
import Header from "@/components/header";
import { mainPageQuery } from "@/graphQL/mainPageQuery";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

export async function getData() {
  const query = '*[_type == "post"]';
  const posts = await client.fetch(mainPageQuery);
  console.log(">>>posts23", posts);
  return posts;
}

const PostMain = async() => {
  const data = await getData()

  console.log(">>>posts trendingNews", data[0]?.trendingNews);
  return (
    <>
      {data?.map((item: any) => (
        <AlbumArtwork
          key={item._id}
          post={item}
          className="w-[250px]"
          aspectRatio="portrait"
          width={250}
          height={330}
        />
      ))}
    </>
  );
};

export default PostMain;
