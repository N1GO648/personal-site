import { Feed } from "feed";

export function generateFeed(posts, metadata) {
  const site_url = "https://nicklim.vercel.app/";

  const feedOptions = {
    author: {
      name: "Nico Lim",
      email: "nicocaleblim@gmail.com",
      link: site_url,
    },
    description: metadata.description,
    favicon: `${site_url}/icon.png`,
    feedLinks: { atom: `${site_url}atom.xml`, rss: `${site_url}rss.xml` },
    generator: "Feed for Node.js",
    id: site_url,
    image:
      "https://media.licdn.com/dms/image/D5603AQFaG_nqw81Dxg/profile-displayphoto-shrink_400_400/0/1680421668277?e=1708560000&v=beta&t=vzqtwtDMBhxrAICT977EtUz2xAgwK4iaY6yvPelYGPY",
    link: site_url,
    title: metadata.title,
  };

  const feed = new Feed(feedOptions);

  for (const post of posts) {
    feed.addItem({
      date: new Date(post.date),
      description: post.spoiler,
      id: `${site_url}${post.slug}/`,
      link: `${site_url}${post.slug}/`,
      title: post.title,
    });
  }

  return feed;
}
