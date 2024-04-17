import React from "react";
import CoverImage from "../app/(blog)/cover-image";
import Link from "next/link";
import Image from "next/image";
import Avatar from "../app/(blog)/avatar";
import { urlForImage } from "@/sanity/lib/utils";

const SideHorizontalNewsCard = (props: any) => {
  const { title, author, slug, coverImage } = props;
  console.log(">>>", coverImage);
  const imageUrl: any = coverImage
    ? urlForImage(coverImage)?.height(1000).width(2000).url()
    : null;

  console.log(">>>", imageUrl);
  return (
    <Link href={`/posts/shah-rukh-sir-se-milao-yaar-yashasvi-jaiswal-s-bas-itna-sa-khwaab-comes-true-meets-king-of`}>
      <div className="p-1 mb-1 grid grid-cols-6">
        <div className="col-span-4">
          <div className="text-left text-[12px]">{title}</div>
        </div>
        <div className="col-span-2">
          <div className="flex justify-center items-center h-full">
            <Image src={imageUrl} alt="co" priority width={200} height={200} className="grayscale"/>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SideHorizontalNewsCard;
