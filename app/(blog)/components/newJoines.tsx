import NewsCard from "@/components/newCard";
import Link from "next/link";
import React from "react";
import CoverImage from "../cover-image";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

const NewJoinesCard = ({ joinees }: any) => {
  return (
    <div className="grid grid-cols-4 mt-1">
      {joinees?.map((item: any, index: any) => (
        <div
          key={index}
          className="col-span-2 md:col-span-1 border md:border-r md:border-b pb-2"
        >
          <div className="flex justify-center items-center w-full pt-4">
          <Image
            className="h-3/4 w-3/4 grayscale transform transition-transform duration-300 group-hover:scale-[104%]"
            width={2000}
            height={2000}
            alt={item.coverImage?.alt || ""}
            src={
              urlForImage(item.coverImage)?.height(2000).width(2000).url() ?? ""
            }
            sizes="100vw"
            priority
          />
          </div>
        <div className="pl-5 mt-2">
          <div className="text-left text-[12px]">{item.name}</div>
          <div className="text-left text-[12px]">{item.jobTitle}</div>
          <div className="text-left text-[12px]">Experience: {item.experience}</div>
          <div className="text-left text-[12px]">{item.place}</div>
        </div>
        </div>
       
      ))}
    </div>
  );
};

export default NewJoinesCard;
