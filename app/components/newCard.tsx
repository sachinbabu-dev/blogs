import React from "react";
import CoverImage from "../(blog)/cover-image";
import Link from "next/link";
import Image from "next/image";
import Avatar from "../(blog)/avatar";

const NewsCard = (props: any) => {
  const { title, author, slug, coverImage } = props;
  console.log('>>>', author)
  return (
    <div className="rounded-lg p-4 mb-4 shadow-lg">
      <div className="flex flex-col">
        <Link className="group mb-3 block md:mb-4" href={`/posts/${slug}`}>
          <CoverImage image={coverImage} priority />
        </Link>
        <div className="text-right text-sm">{title}</div>
        <div className="text-right text-sm">{author && <Avatar name={author.name} picture={author.picture} />}</div>
       
      </div>
    </div>
  );
};

export default NewsCard;
