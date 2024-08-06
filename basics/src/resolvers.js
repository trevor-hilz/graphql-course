// Resolvers
const resolvers = {
  Query: {
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
  },
};

export { resolvers };
