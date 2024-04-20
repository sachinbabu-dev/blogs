import { Image } from "next-sanity/image";

import { Author } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/utils";

export default function Avatar({ name, picture }: Author) {
  console.log(">>>", picture);
  return (
    <div className="flex items-center text-xl justify-end">
      <div className="text-pretty text-[10px]">By {name}</div>
      {picture?.asset?._ref ? (
        <div className="ml-2 h-6 w-6">
          <Image
            alt={picture?.alt || ""}
            className="h-full rounded-full object-cover grayscale"
            height={16}
            width={16}
            src={
              urlForImage(picture)
                ?.height(96)
                .width(96)
                .fit("crop")
                .url() as string
            }
          />
        </div>
      ) : (
        <div className="mr-1">By </div>
      )}
    </div>
  );
}
