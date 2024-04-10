import Link from "next/link";
import { Suspense } from "react";

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";
import MoreStories from "./more-stories";
import Onboarding from "./onboarding";
import PortableText from "./portable-text";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  HeroQueryResponse,
  Post,
  SettingsQueryResponse,
  heroQuery,
  settingsQuery,
  trendingQuery,
} from "@/sanity/lib/queries";
import NewsCard from "../components/newCard";

function Intro(props: { title: string | null | undefined; description: any }) {
  const title = props.title || demo.title;
  const description = props.description?.length
    ? props.description
    : demo.description;
  return (
    <>
      <h2 className="text-balance text-4xl font-bold leading-tight tracking-tighter lg:pr-8 lg:text-6xl pb-3">
        {title || demo.title}
      </h2>
    </>
  );
}

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
      <Link className="group mb-8 block md:mb-16" href={`/posts/${slug}`}>
        <CoverImage image={coverImage} priority />
      </Link>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="text-pretty mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && (
            <p className="text-pretty mb-4 text-lg leading-relaxed">
              {excerpt}
            </p>
          )}
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </article>
  );
}

export default async function Page() {
  const [settings, heroPost, trending] = await Promise.all([
    sanityFetch<SettingsQueryResponse>({
      query: settingsQuery,
    }),
    sanityFetch<HeroQueryResponse>({ query: heroQuery }),
    sanityFetch<any>({ query: trendingQuery }),
  ]);

  console.log(">>>trending", trending);
  return (
    <div className="mx-auto px-5">
      <div className="grid grid-cols-10 gap-4">

        <div className="col-span-2 ">
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
        </div>
        <div className="col-span-6 bg-red-500">
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
        </div>
        <div className="col-span-2 bg-blue-200">1</div>
      </div>
    </div>
  );
}
