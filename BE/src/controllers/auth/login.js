'use strict';

const router = require('koa-joi-router');
const { User } = require('../../models/user.model');
var jwt = require('jsonwebtoken');

const Joi = router.Joi;

const loginValidate = {
  body: {
    email: Joi.string().lowercase().email().required(),
    password: Joi.string().required(),
  },
  type: 'json',
  output: {
    200: {
      body: {
        success: Joi.boolean(),
        data: Joi.any(),
      },
    },
  },
};

const login = async (ctx) => {
  const { email, password } = ctx.request.body;

  let user = await User.findOne({ email });
  const isMatch = await user?.checkPassword(password);
  if (!isMatch)
    return ctx.showError('Email hoặc password không chính xác.', 401);

  const token = createJwtPayload(user);
  user = JSON.parse(JSON.stringify(user));
  user.id = user._id;
  delete user._id;
  delete user.password;
  return ctx.showResult({ ...user, token });
};

const createJwtPayload = (user) => {
  const data = {
    id: user._id,
    email: user.email,
  };
  const secret = user.password + 'secret';

  return jwt.sign(data, secret, { expiresIn: '365d' });
};

const LoginHandler = {
  login,
  loginValidate,
};

module.exports = LoginHandler;
