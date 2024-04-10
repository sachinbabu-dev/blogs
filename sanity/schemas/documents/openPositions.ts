// schemas/article.js

export default {
    name: 'openPositions',
    title: 'Open Positions',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{type: 'author'}],
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{type: 'block'}],
      },
    ],
  }
  