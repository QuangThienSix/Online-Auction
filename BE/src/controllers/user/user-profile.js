'use strict';

const router = require('koa-joi-router');
const { User } = require('../../models/user.model');

const Joi = router.Joi;

const userProfileValidate = {
  output: {
    200: {
      body: {
        success: Joi.boolean(),
        data: Joi.any(),
      },
    },
  },
};

const userProfile = async (ctx) => {
  const userPayload = ctx.user;

  const user = await User.findOne({ email: userPayload?.email });

  if (!user) return ctx.showError('Không tìm thấy user', 404);
  JSON.parse(JSON.stringify(user));
  user.id = user._id;
  delete user._id;
  delete user.password;

  return ctx.showResult(user);
};

const UserProfileHandler = {
  userProfile,
  userProfileValidate,
};

module.exports = UserProfileHandler;
