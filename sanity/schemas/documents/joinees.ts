// schemas/joinees.js

export default {
    name: 'joinees',
    title: 'Joinees',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'place',
        type: 'string',
        title: 'Place'
      },
      {
        name: 'jobTitle',
        type: 'string',
        title: 'Job Title'
      },
      {
        name: 'experience',
        title: 'Experience',
        type: 'number',
        description: 'Experience in years'
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
  