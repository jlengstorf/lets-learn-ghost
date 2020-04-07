const GhostContentAPI = require('@tryghost/content-api');

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'de1743b7e80c4af8053bec68e8',
  version: 'v3',
});

module.exports = (config) => {
  config.addCollection('posts', async () => {
    const posts = await api.posts.browse({}).catch((err) => console.error(err));

    return posts;
  });
};
