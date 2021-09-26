'use strict';

const router = require('koa-joi-router');
const { User } = require('../../models/user.model');
const Joi = router.Joi;

const listUserValidate = {
  query: {
    page: Joi.number().min(1).default(1),
    size: Joi.number().min(1).default(5),
  },
  output: {
    200: {
      body: {
        success: Joi.boolean(),
        data: {
          total: Joi.number(),
          users: Joi.array(),
        },
      },
    },
  },
};

const listUser = async (ctx) => {
  const { page, size } = ctx.query;
  const countUser = await User.count({});
  const users = await User.find({})
    .skip((page - 1) * size)
    .limit(size);

  return ctx.showResult({
    total: countUser,
    users: users.map((user) => {
      user = JSON.parse(JSON.stringify(user));
      user.id = user._id;
      delete user._id;
      delete user.password;
      return user;
    }),
  });
};

const ListUserValidateHandler = {
  listUser,
  listUserValidate,
};

module.exports = ListUserValidateHandler;
