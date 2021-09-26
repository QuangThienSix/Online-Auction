'use strict';

const router = require('koa-joi-router');
const { User } = require('../../models/user.model');
const {
  getPayloadAuthorization,
} = require('../../shared/functions/get-payload-authorization');

const Joi = router.Joi;

const changePasswordValidate = {
  body: {
    password: Joi.string().required(),
    newPassword: Joi.string().required(),
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

const changePassword = async (ctx) => {
  const userPayload = getPayloadAuthorization(ctx.headers?.authorization);
  const { password, newPassword } = ctx.request.body;

  const user = await User.findOne({ email: userPayload?.email });
  const isMatch = await user?.checkPassword(password);
  if (!isMatch) {
    return ctx.showError('Mật khẩu cũ không chính xác', 400);
  }

  user.password = newPassword;
  await user.save();

  return ctx.showResult({});
};

const ChangePasswordHandler = {
  changePassword,
  changePasswordValidate,
};

module.exports = ChangePasswordHandler;
