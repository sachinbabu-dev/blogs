export default {
  name: 'mainPage',
  title: 'Main Page',
  type: 'document',
  fields: [

    {
      name: 'trendingNews',
      title: 'Trending News',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'trendingNews' }] }],
      description: 'Select articles for the trending news section',
    },
    {
      name: 'funnyNews',
      title: 'Funny News',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'funnyNews' }] }],
      description: 'Select articles for the funny news section',
    },
    {
      name: 'subMainArticles',
      title: 'Sub Main Articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subMainArticles' }] }],
      description: 'Select articles for the sub main articles section',
    },
    {
      name: 'openPositions',
      title: 'Open Positions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'openPositions' }] }],
      description: 'List the currently open positions',
    },
    // {
    //   name: 'newJoinees',
    //   title: 'New Joinees',
    //   type: 'array',
    //   of: [{ type: 'reference', to: [{ type: 'person' }] }],
    //   description: 'List the new members who have joined the organization',
    // },
    // {
    //   name: 'events',
    //   title: 'Events',
    //   type: 'array',
    //   of: [{ type: 'reference', to: [{ type: 'event' }] }],
    //   description: 'Select events to be featured on the main page',
    // },
  ]
}
