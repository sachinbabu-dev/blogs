import { Image } from "next-sanity/image";
import { urlForImage } from "@/sanity/lib/utils";

interface CoverImageProps {
  image: any;
  priority?: boolean;
}

export default function CoverImage({ image: source, priority }: CoverImageProps) {
  const imageUrl = source ? urlForImage(source)?.height(1000).width(2000).url() : "";
  return (
    <div className="group shadow-md transition-shadow duration-200 hover:shadow-lg sm:mx-0">
      {source ? (
        <Image
          className="h-auto w-full grayscale transform transition-transform duration-300 group-hover:scale-[104%]"
          width={2000}
          height={1000}
          alt={source?.alt || ""}
          src={imageUrl as string}
          sizes="100vw"
          priority={priority}
        />
      ) : (
        <div className="bg-slate-50" style={{ paddingTop: "50%" }} />
      )}
    </div>
  );
}
