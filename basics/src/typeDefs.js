const typeDefs = `
  type Query {
    me: User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
  id: ID!
  title: String!
  body: String!
  published: Boolean!
  }
`;

export { typeDefs };
