import { groq, type PortableTextBlock } from "next-sanity";
import type { Image } from "sanity";

export const settingsQuery = groq`*[_type == "settings"][0]`;
export interface SettingsQueryResponse {
  title?: string;
  description?: PortableTextBlock[];
  footer?: PortableTextBlock[];
  ogImage?: (Image & { alt?: string; metadataBase?: string }) | null;
}

export interface Author {
  name: string;
  picture?: (Image & { alt?: string | null }) | null;
}
export interface Post {
  _id: string;
  status: "draft" | "published";
  title: string;
  slug: string;
  excerpt?: string | null;
  coverImage?: (Image & { alt?: string }) | null;
  date: string;
  author?: Author | null;
}

const postFields = groq`
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  body,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;


export const trendingQuery = groq`*[_type == "trendingNews" && defined(slug.current)] | order(date desc, _updatedAt desc) {
  content,
  ${postFields}
}`;
export type TrendingQueryResponse =
  | (Post & {
      content?: PortableTextBlock[] | null;
    })
  | null;

  export const funnyQuery = groq`*[_type == "funnyNews" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    content,
    ${postFields}
  }`;
  export type FunnyQueryResponse =
    | (Post & {
        content?: PortableTextBlock[] | null;
      })
    | null;
  

    export const joineesQuery = groq`*[_type == "joinees"] | order(date desc, _updatedAt desc) {
      content,
      _id,
      coverImage,
      name,
      place,
      jobTitle,
      experience
    }`;
    export type JoineesQueryResponse =
      | (Post & {
          content?: PortableTextBlock[] | null;
        })
      | null;

    export const subNewsQuery = groq`*[_type == "subMainArticles" && defined(slug.current)] | order(date desc, _updatedAt desc) {
      content,
      ${postFields}
    }`;
    export type SubNewsQueryResponse =
      | (Post & {
          content?: PortableTextBlock[] | null;
        })
      | null;
 
      export const openPositionQuery = groq`*[_type == "openPositions" && defined(slug.current)] | order(date desc, _updatedAt desc) {
        content,
        ${postFields}
      }`;
      export type OpenPositionQueryResponse =
        | (Post & {
            content?: PortableTextBlock[] | null;
          })
        | null;
    
      
export const heroQuery = groq`*[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
  content,
  ${postFields}
}`;
export type HeroQueryResponse =
  | (Post & {
      content?: PortableTextBlock[] | null;
    })
  | null;

export const moreStoriesQuery = groq`*[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
  ${postFields}
}`;
export type MoreStoriesQueryResponse = Post[] | null;

export const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
  content,
  ${postFields}
}`;
export type PostQueryResponse =
  | (Post & {
      content?: PortableTextBlock[] | null;
    })
  | null;
