import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";
import author from "./schemaTypes/author";
import article from "./schemaTypes/mainArticle";
import mainPage from "./schemaTypes/mainPage";
import funnyNews from "./schemaTypes/funnyNews";
import subMainArticles from "./schemaTypes/subMainArticles";
import trendingNews from "./schemaTypes/trendingNews";
import openPositions from "./schemaTypes/openPositions";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    article,
    mainPage,
    funnyNews,
    subMainArticles,
    trendingNews,
    openPositions,
  ],
};
