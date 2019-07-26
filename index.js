const express = require('express');
const server = express();
const userRoute = require('./user.route');

server.use(express.json());

server.use('/users', userRoute);
server.get('/', (req, res) => {
  res.status(200).json('Server exposed at /users');
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});

module.exports = server;
