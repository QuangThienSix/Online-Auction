'use strict';

const router = require('koa-joi-router');
const { User } = require('../../models/user.model');
const SendGridService = require('../../services/send-grid.service');
var jwt = require('jsonwebtoken');

const Joi = router.Joi;

const resetPasswordValidate = {
  body: {
    token: Joi.string().required(),
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

const resetPassword = async (ctx) => {
  const { token, newPassword } = ctx.request.body;
  const jwtPayload = jwt.decode(token);

  const user = await User.findOne({ email: jwtPayload?.email });
  if (!user) {
    return ctx.showError('Liên kết không hợp lệ', 400);
  }

  try {
    const secret = user.password;
    await jwt.verify(token, secret);
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return ctx.showError('Liên kết đã hết hạn.', 400);
    } else if (error instanceof jwt.JsonWebTokenError) {
      return ctx.showError('liên kết không hợp lệ.', 400);
    }
    return ctx.showError(error + '', 502);
  }

  user.password = newPassword;
  await user.save();

  return ctx.showResult({});
};

const ResetPasswordHandler = {
  resetPassword,
  resetPasswordValidate,
};

module.exports = ResetPasswordHandler;
