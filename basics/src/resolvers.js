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
    author: '1',
  },
  {
    id: '2',
    title: 'Second post',
    body: 'This is the body of the second post.',
    published: false,
    author: '1',
  },
  {
    id: '3',
    title: 'Third post',
    body: 'This is the body of the third post.',
    published: true,
    author: '2',
  },
];

const comments = [
  {
    id: '1',
    text: 'this is the first comment',
    author: '1',
    post: '1',
  },
  {
    id: '2',
    text: 'this is the second comment',
    author: '1',
    post: '1',
  },
  {
    id: '3',
    text: 'this is the third comment',
    author: '1',
    post: '2',
  },
  {
    id: '4',
    text: 'this is the fourth comment',
    author: '3',
    post: '1',
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
    comments(parent, args, ctx, info) {
      return comments;
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
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => user.id === parent.author);
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => comment.post === parent.id);
    },
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => post.author === parent.id);
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => comment.author === parent.id);
    },
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => user.id === parent.author);
    },
    post(parent, args, ctx, info) {
      return posts.find((post) => post.id === parent.post);
    },
  },
};

export { resolvers };
