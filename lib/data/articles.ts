export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "vaccines-autism-rise",
    title: "Research Finds Vaccines Are Not Behind the Rise in Autism. So What Is?",
    excerpt:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus.",
    body: `Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.

Tempor commodo ullamcorper a lacus vestibulum sed. Et netus et malesuada fames ac turpis egestas sed tempus. Facilisis gravida neque convallis a cras semper auctor neque. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras.

Morbi tincidunt augue interdum velit euismod in pellentesque massa. Pellentesque habitant morbi tristique senectus et netus et malesuada. Volutpat blandit aliquam etiam erat velit scelerisque. Diam vulputate ut pharetra sit amet aliquam id diam maecenas.`,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    category: "Science",
    author: "Neil MacLeod",
    date: "February 21, 2019",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "lorem-ipsum-dolor",
    title: "Lorem ipsum dolor sit amet ad dolor",
    excerpt:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    body: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    category: "Health",
    author: "Neil MacLeod",
    date: "January 14, 2019",
    readTime: "3 min read",
  },
  {
    id: "3",
    slug: "an-quas-disputationi",
    title: "An quas disputationi mea Legeere libris scripta",
    excerpt:
      "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.",
    body: `Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.`,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    category: "Science",
    author: "Lucas",
    date: "October 16, 2017",
    readTime: "4 min read",
  },
  {
    id: "4",
    slug: "in-vel-judico-nemore",
    title: "In vel judico nemore voluptua te porro",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo.",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.

Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.

Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.`,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=150&fit=crop",
    category: "Politics",
    author: "Neil MacLeod",
    date: "March 3, 2019",
    readTime: "2 min read",
  },
  {
    id: "5",
    slug: "facilisi-cum-ne",
    title: "Facilisi cum ne ad vero dolorem quo",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=150&fit=crop",
    category: "Technology",
    author: "Neil MacLeod",
    date: "April 12, 2019",
    readTime: "3 min read",
  },
  {
    id: "6",
    slug: "diceret-erroribus",
    title: "Diceret erroribus eos ut est nisl summo",
    excerpt:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    body: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`,
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&h=150&fit=crop",
    category: "Travel",
    author: "Lucas",
    date: "May 8, 2019",
    readTime: "4 min read",
  },
  {
    id: "7",
    slug: "reprimique-consectetuer",
    title: "Reprimique consectetuer usu mel no brute munere",
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    body: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.

Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus.`,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=150&fit=crop",
    category: "Health",
    author: "Mateo",
    date: "June 22, 2019",
    readTime: "3 min read",
  },
  {
    id: "8",
    slug: "vel-ad-molestie",
    title: "Vel ad molestie menandri vis et nam",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
    image: "https://images.unsplash.com/photo-1542596594-649edbc13630?w=200&h=150&fit=crop",
    category: "Politics",
    author: "Hazel",
    date: "July 15, 2019",
    readTime: "2 min read",
  },
  {
    id: "9",
    slug: "sententiae-epicuri",
    title: "Sententiae epicuri conclusionemque eos no id mucius",
    excerpt:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    body: `Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.`,
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
    category: "Health",
    author: "Neil MacLeod",
    date: "April 20, 2020",
    readTime: "4 min read",
  },
  {
    id: "10",
    slug: "aliquip-vim",
    title: "Aliquip Vim wisi mnesus ne Ex scaevola",
    excerpt:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    body: `Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
    category: "Health",
    author: "Neil MacLeod",
    date: "September 15, 2020",
    readTime: "3 min read",
  },
  {
    id: "11",
    slug: "eu-cum-nibh",
    title: "Eu cum Nibh everti vivendo ius ne",
    excerpt:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    body: `Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop",
    category: "Health",
    author: "Lucas",
    date: "January 20, 2020",
    readTime: "5 min read",
  },
  {
    id: "12",
    slug: "senencti-ene",
    title: "Senencti eni est ration quidam perciciuntur cum",
    excerpt:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    body: `Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`,
    image: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=400&h=300&fit=crop",
    category: "Health",
    author: "Neil MacLeod",
    date: "July 19, 2020",
    readTime: "4 min read",
  },
  {
    id: "13",
    slug: "diceret-erroribus-2",
    title: "Diceret erroribus eos ut est nisl summo",
    excerpt:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    body: `Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`,
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
    category: "Health",
    author: "Lucas",
    date: "June 19, 2020",
    readTime: "3 min read",
  },
  {
    id: "14",
    slug: "vel-ad-molestie-2",
    title: "Vel ad molestie menandri vis et nam",
    excerpt:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    body: `Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`,
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=400&h=300&fit=crop",
    category: "Health",
    author: "Hazel",
    date: "October 6, 2020",
    readTime: "2 min read",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.slice(1, 3);
}

export function getHeroArticle(): Article {
  return articles[0];
}

export function getSideArticles(): Article[] {
  return articles.slice(3, 8);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}
