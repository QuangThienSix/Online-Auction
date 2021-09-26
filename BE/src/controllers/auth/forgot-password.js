'use strict';

const router = require('koa-joi-router');
const { User } = require('../../models/user.model');
const SendGridService = require('../../services/send-grid.service');
var jwt = require('jsonwebtoken');

const Joi = router.Joi;

const forgotPasswordValidate = {
  body: {
    email: Joi.string().lowercase().email().required(),
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

const forgotPassword = async (ctx) => {
  const { email } = ctx.request.body;

  const user = await User.findOne({ email });
  if (!user) {
    return ctx.showError('Email không tồn tại', 404);
  }

  const token = createTokenForgotPassword(user);
  const html = generateHtmlEmailForgotPw(user, token);

  SendGridService.sendMail(email, html);

  return ctx.showResult({});
};

const createTokenForgotPassword = (user) => {
  const data = {
    email: user.email,
  };
  const secret = user.password;

  return jwt.sign(data, secret, { expiresIn: '6h' });
};

const generateHtmlEmailForgotPw = (user, token) => {
  const html = `
    Xin chào ${user.name},<br><br>
    Nhấp vào <a clicktracking=off href="https://g7jobsearch.xyz/user/reset?token=${token}">liên kết</a> để đổi mật khẩu.
  `;
  return html;
};

const ForgotPasswordHandler = {
  forgotPassword,
  forgotPasswordValidate,
};

module.exports = ForgotPasswordHandler;
