import React from "react";
import CoverImage from "../app/(blog)/cover-image";
import Link from "next/link";
import Image from "next/image";
import Avatar from "../app/(blog)/avatar";

const NewsCard = (props: any) => {
  const { title, author, slug, coverImage } = props;
  return (
    <div className={`p-4 mb-1`}>
      <div className="flex flex-col">
        <Link className="group mb-3 block md:mb-4" href={`/posts/${slug}`}>
          <CoverImage image={coverImage} priority />
        </Link>
        <div className="text-left text-[12px]">{title}</div>
      </div>
    </div>
  );
};

export default NewsCard;
