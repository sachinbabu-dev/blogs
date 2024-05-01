import { sanityFetch } from "@/sanity/lib/fetch";
import {
  HeroQueryResponse,
  SettingsQueryResponse,
  funnyQuery,
  heroQuery,
  openPositionQuery,
  settingsQuery,
  subNewsQuery,
  trendingQuery,
} from "@/sanity/lib/queries";
import MainNews from "./components/mainNews";
import SideNewsCard from "./components/sideNews";
import HorizontalNews from "./components/horizontalNews";
import SideHorizontalNewsCard from "@/components/sidebarNews";
import SubArticle from "./components/subArticle";

export default async function Page() {
  const [settings, heroPost, trending, funnyNews, subNews, openPosition] =
    await Promise.all([
      sanityFetch<SettingsQueryResponse>({
        query: settingsQuery,
      }),
      sanityFetch<HeroQueryResponse>({ query: heroQuery }),
      sanityFetch<any>({ query: trendingQuery }),
      sanityFetch<any>({ query: funnyQuery }),
      sanityFetch<any>({ query: subNewsQuery }),

      sanityFetch<any>({ query: openPositionQuery }),
    ]);

  console.log("funnyNews", funnyNews);
  return (
    <div className="mx-auto px-5 dark:bg-black">
      <div className="grid grid-cols-10 gap-4 border-b">
        <div className="col-span-3 border-r pr-4">
          {trending?.map((item: any, index: number) => (
            <div className="border-b w-full pt-4" key={index}>
              <SideHorizontalNewsCard
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
          {/* <HorizontalNews news={trending} heading="Trending 🔥" /> */}
        </div>
        <div className="col-span-4 pt-4">
          <MainNews heroPost={heroPost} />
          <div className="grid grid-cols-4">
            <SubArticle news={subNews} />
          </div>
        </div>
        <div className="col-span-3 border-l pl-4">
          <SideNewsCard news={funnyNews} heading="Funny" />
          {/* <SideNewsCard news={openPosition} heading="Open position" /> */}
        </div>
      </div>
    </div>
  );
}
