import { sanityFetch } from "@/sanity/lib/fetch";
import {
  HeroQueryResponse,
  SettingsQueryResponse,
  heroQuery,
  settingsQuery,
  trendingQuery,
} from "@/sanity/lib/queries";
import MainNews from "./components/mainNews";
import SideNewsCard from "./components/sideNews";

export default async function Page() {
  const [settings, heroPost, trending] = await Promise.all([
    sanityFetch<SettingsQueryResponse>({
      query: settingsQuery,
    }),
    sanityFetch<HeroQueryResponse>({ query: heroQuery }),
    sanityFetch<any>({ query: trendingQuery }),
  ]);

  return (
    <div className="mx-auto px-5 dark:bg-black">
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-2 ">
          <SideNewsCard trending={trending} />
        </div>
        <div className="col-span-6">
          <MainNews heroPost={heroPost} />
        </div>
        <div className="col-span-2">
          <SideNewsCard trending={trending} />
        </div>
      </div>
    </div>
  );
}
