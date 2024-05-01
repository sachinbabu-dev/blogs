import { sanityFetch } from "@/sanity/lib/fetch";
import { SettingsQueryResponse, settingsQuery } from "@/sanity/lib/queries";
import { PortableTextBlock } from "next-sanity";
import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";

export default async function Footer() {
  const data = await sanityFetch<SettingsQueryResponse>({
    query: settingsQuery,
  });
  const footer = data?.footer || ([] as PortableTextBlock[]);

  return (
    <>
      <footer className="py-2">
        <div className="border-t">
          <div className="md:p-8 p-2 my-2">
            <div className="flex flex-col mt-2">
              <Logo type="logo" height={42} width={42} />
              <div className="flex flex-wrap mt-2 text-[13px] text-slate-500 justify-start items-center">
                <a href="#" className="lg:px-2 pr-2 lg:pr-0 border-r border-slate-200">
                  Website
                </a>
                <a
                  href="https://instagram.com"
                  className="px-2 border-r border-slate-200"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  className="px-2 border-r border-slate-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://youtube.com"
                  className="px-2 border-r border-slate-200"
                >
                  Youtube
                </a>
                <a
                  href="#"
                  className="px-2 border-r border-slate-200 hidden md:block"
                >
                  Terms
                </a>
                <a href="#" className="px-2 hidden md:block">
                  Privacy policy
                </a>
              </div>
              <div className="text-[13px]  mt-6 md:mt-3 text-slate-500">
                Bridge Daily is solely for entertainment purposes.
                <br /> It is designed to amuse and engage without causing harm
                or disparaging anyone. Please enjoy it as a fun and
                light-hearted section.
              </div>
            </div>
          </div>
          <div className="col-span-4 border-t py-4">
            <div className="flex justify-between text-slate-500 text-[13px] px-4 md:px-8">
              <div className="">© 2024, bridge daily.</div>
              <div className="">Have a nice day! 🎉</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
