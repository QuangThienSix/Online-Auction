'use strict';

const router = require('koa-joi-router');
const { User } = require('../../models/user.model');
const Joi = router.Joi;

const registerValidate = {
  body: {
    name: Joi.string(),
    email: Joi.string().lowercase().email().required(),
    password: Joi.string().required(),
    phoneNumber: Joi.string(),
    address: Joi.string(),
  },
  type: 'json',
  output: {
    200: {
      body: {
        success: Joi.boolean(),
        data: {
          userId: Joi.string(),
        },
      },
    },
  },
};

const register = async (ctx) => {
  const body = ctx.request.body;

  const user = new User(body);
  await user.save();

  return ctx.showResult({
    userId: user.id,
  });
};

const RegisterHandler = {
  register,
  registerValidate,
};

module.exports = RegisterHandler;
