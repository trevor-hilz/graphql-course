import { v4 as uuidv4 } from 'uuid';

const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.users.some((user) => user.email === args.data.email);

    if (emailTaken) throw new Error('Email taken.');

    const user = {
      id: uuidv4(),
      ...args.data,
    };

    db.users.push(user);
    return user;
  },

  deleteUser(parent, args, { db }, info) {
    const userIndex = db.users.findIndex((user) => user.id === args.id);

    if (userIndex === -1) throw new Error('User not found.');

    const deletedUser = db.users.splice(userIndex, 1);

    posts = db.posts.filter((post) => {
      const match = post.author === args.id;

      if (match) {
        comments = db.comments.filter((comment) => comment.post !== post.id);
      }

      return !match;
    });

    comments = db.comments.filter((comment) => comment.author !== args.id);

    return deletedUser[0];
  },

  createPost(parent, args, { db }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author);
    if (!userExists) throw new Error('user not found');

    const writePost = {
      id: uuidv4(),
      ...args.data,
    };
    db.posts.push(writePost);
    return writePost;
  },

  deletePost(parent, args, { db }, info) {
    const postIndex = db.posts.findIndex((post) => post.id === args.id);

    if (postIndex === -1) throw new Error('Post not found');

    const deletedPost = db.posts.splice(postIndex, 1);

    comments = db.comments.filter((comment) => comment.post !== args.id);

    return deletedPost[0];
  },

  createComment(parent, args, { db }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author);
    const postExists = db.posts.some(
      (post) => post.id === args.data.post && post.published
    );
    if (!userExists || !postExists) throw new Error('user or post not found');

    const comment = {
      id: uuidv4(),
      ...args.data,
    };

    db.comments.push(comment);

    return comment;
  },

  deleteComment(parents, args, { db }, info) {
    const commentIndex = db.comments.findIndex(
      (comment) => comment.id === args.id
    );

    if (commentIndex === -1) throw new Error('Cannot find comment');

    const deletedComment = db.comments.splice(commentIndex, 1);

    return deletedComment[0];
  },
};

export { Mutation as default };
