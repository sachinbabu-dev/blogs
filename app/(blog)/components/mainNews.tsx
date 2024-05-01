import React from "react";
import Onboarding from "../onboarding";
import { Post } from "@/sanity/lib/queries";
import Link from "next/link";
import CoverImage from "../cover-image";
import DateComponent from "../date";
import Avatar from "../avatar";

function HeroPost({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
}: Pick<
  Post,
  "title" | "coverImage" | "date" | "excerpt" | "author" | "slug"
>) {
  return (
    <article>
      <div className="grid grid-cols-4 border-b pb-4">
        <div className="col-span-4">
          <CoverImage image={coverImage} priority />
        </div>
        <div className="col-span-4 pt-4 text-[12px] md:text-sm"> {title} </div>
      </div>
    </article>
  );
}

const MainNews = ({ heroPost }: any) => {
  return (
    <>
      {heroPost ? (
        <HeroPost
          title={heroPost.title}
          slug={heroPost.slug}
          coverImage={heroPost.coverImage}
          excerpt={heroPost.excerpt}
          date={heroPost.date}
          author={heroPost.author}
        />
      ) : (
        <Onboarding />
      )}
    </>
  );
};

export default MainNews;
