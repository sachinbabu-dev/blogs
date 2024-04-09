import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import  imageUrlBuilder  from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  post: any; // Adjusting to use the post object directly
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function AlbumArtwork({
  post,
  aspectRatio = "portrait",
  width = 300, // Default width if not provided
  height = 400, // Default height if not provided
  className,
  ...props
}: AlbumArtworkProps) {
  const { mainImage, title } = post;
  const builder = imageUrlBuilder(client)

  function urlFor(source:any) {
    return builder.image(source)
  }

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            {mainImage && (
              <Image
                src={urlFor(mainImage).width(200).url()}
                alt={title}
                width={width}
                height={height}
                className={cn(
                  "h-auto w-auto object-cover transition-all hover:scale-105",
                  aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                )}
              />
            )}
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          {/* Context menu items */}
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{title}</h3>
        {/* You might want to display the author or other details here */}
      </div>
    </div>
  );
}
