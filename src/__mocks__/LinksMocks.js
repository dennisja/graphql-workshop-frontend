const fetchLinksMockData = {
  data: {
    links: [
      {
        id: '1',
        url: 'https://google.com',
        title: 'Google Search',
        postedBy: {
          id: '1',
          firstName: 'dennis',
          lastName: 'jjagwe',
          username: 'dj',
        },
      },
      {
        id: '2',
        url: 'https://whatsapp.com',
        title: 'Whatsapp Messenger',
        postedBy: {
          id: '1',
          firstName: 'dennis',
          lastName: 'jjagwe',
          username: 'dj',
        },
      },
    ],
  },
};

const createLinkVariables = {
  url: 'https://twitter.com',
  title: 'Twitter',
};

const createLinkMockResponse = {
  data: {
    createLink: {
      id: 8,
      url: 'https://twitter.com',
      title: 'Twitter',
      postedBy: {
        id: 1,
        firstName: 'mockGuy',
        lastName: 'mockDude',
        username: 'mockBoy',
      },
    },
  },
};

export { fetchLinksMockData, createLinkVariables, createLinkMockResponse };
