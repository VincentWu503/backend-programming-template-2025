const express = require('express');

const usersController = require('./users-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/users', route);

  // Get list of users
  route.get('/', usersController.getUsers);

  // Create a new user
  route.post('/', usersController.createUser);

  // Get user detail
  route.get('/:id', usersController.getUser);

  // Update user
  route.put('/:id', usersController.updateUser);

  // Change password
  route.put('/:id/change-password', usersController.changePassword);

  // Delete user
  route.delete('/:id', usersController.deleteUser);

  app.get('/users', (request, response) => {
    const offset = request.query.offset || 0;
    const limit = request.query.limit || 10;
    response.send(`Offset: ${offset}; Limit: ${limit}`);
  });
};
