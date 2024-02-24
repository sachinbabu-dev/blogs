import Header from "@/components/header";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

export async function fetchPosts() {
  const query = '*[_type == "post"]';
  const posts = await client.fetch(query);
  console.log(">>>posts23", posts);
  return posts;
}

const PostMain = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

    console.log(">>>posts", posts);
  return (
    <div>
      <Header />
    </div>
  );
};

export default PostMain;
