const express = require('express');

const router = express.Router();

const validateUser = async (req, res) => {
  const{
    email,
    password
  } = req.body;

  if (email != user.email || password !== user.password) {
    throw errorResponder(
        errorTypes.INVALID_PASSWORD,
        'Email or password is incorrect!'
    );
    res.status(403).json;
  }
};

route.post('/authentication/login', validateUser);

module.exports = router;