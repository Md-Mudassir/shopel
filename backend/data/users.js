import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Mohammed',
    email: 'm@admin.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'Abdul',
    email: 'a@admin.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Muzammil',
    email: 'z@admin.com',
    password: bcrypt.hashSync('12346', 10),
  },
];

export default users;
