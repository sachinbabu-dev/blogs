import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import article from './schemaTypes/article'
import mainPage from './schemaTypes/mainPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, article, mainPage],
}
