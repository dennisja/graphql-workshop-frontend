const fetchLinksMockData = {
  data: {
    links: [
      {
        id: "1",
        url: "https://google.com",
        title: "Google Search",
        postedBy: {
          id: "1",
          firstName: "dennis",
          lastName: "jjagwe",
          username: "dj"
        }
      },
      {
        id: "2",
        url: "https://whatsapp.com",
        title: "Whatsapp Messenger",
        postedBy: {
          id: "1",
          firstName: "dennis",
          lastName: "jjagwe",
          username: "dj"
        }
      }
    ]
  }
};

export { fetchLinksMockData };
