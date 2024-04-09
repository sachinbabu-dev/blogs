// schemas/mainPage.js

export default {
    name: 'mainPage',
    title: 'Main Page',
    type: 'document',
    fields: [
      {
        name: 'featuredArticle',
        title: 'Featured Article',
        type: 'reference',
        to: [{type: 'article'}], // Ensure this matches your article schema's name
        description: 'Select the main article to be featured on the main page',
      },
      // Include any other fields your main page might need...
    ],
  }
  