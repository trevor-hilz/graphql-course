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

const db = {
  users,
  posts,
  comments,
};

export { db as default };
