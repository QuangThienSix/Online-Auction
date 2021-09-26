'use strict';
const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');

const permissions = (...roles) => {
  return async (ctx, next) => {
    const authPrefix = ctx.headers?.authorization?.split(' ')[0];
    const token = ctx.headers?.authorization?.split(' ')[1];
    if (authPrefix != 'Bearer' || !token) return responseError(ctx);

    const jwtPayload = jwt.decode(token);
    const email = jwtPayload?.email;

    if (!email) return responseError(ctx);
    try {
      let user = await User.findOne({ email });
      const secret = user?.password + 'secret';
      await jwt.verify(token, secret);
      delete user.password;
      ctx.user = user;
      if (roles.length === 0) return await next();
      if (!roles.includes(user?.role)) return responseError(ctx);
    } catch (error) {
      return ctx.showError(error + '', 401);
    }

    return await next();
  };
};

const responseError = (ctx) => {
  return ctx.showError('401 Unauthorized', 401);
};

module.exports = permissions;
