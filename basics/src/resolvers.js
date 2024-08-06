const users = [
  {
    id: '1',
    name: 'Trevor',
    email: 'trevor@example.com',
    age: 35,
  },
  {
    id: '2',
    name: 'Mackenzie',
    email: 'mackenzie@example.com',
  },
  {
    id: '3',
    name: 'Bailey',
    email: 'bailey@example.com',
    age: 7,
  },
];

const posts = [
  {
    id: '1',
    title: 'First post',
    body: 'This is the body of the first post.',
    published: true,
  },
  {
    id: '2',
    title: 'Second post',
    body: 'This is the body of the second post.',
    published: false,
  },
  {
    id: '3',
    title: 'Third post',
    body: 'This is the body of the third post.',
    published: true,
  },
];

// Resolvers
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }

      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    me() {
      return {
        id: '123098',
        name: 'Mike',
        email: 'mike@example.com',
      };
    },
    post() {
      return {
        id: '12345-abcdef',
        title: 'This is a title!',
        body: 'Hello, this is the body of the post.',
        published: true,
      };
    },
    posts(parent, args, ctx, info) {
      if (!args.query) return posts;
      return posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },
  },
};

export { resolvers };
