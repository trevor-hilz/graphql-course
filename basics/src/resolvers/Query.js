const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  },

  posts(parent, args, { db }, info) {
    if (!args.query) return db.posts;
    return db.posts.filter((post) => {
      const isTitleMatch = post.title
        .toLowerCase()
        .includes(args.query.toLowerCase());
      const isBodyMatch = post.body
        .toLowerCase()
        .includes(args.query.toLowerCase());
      return isTitleMatch || isBodyMatch;
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
};

export { Query as default };
