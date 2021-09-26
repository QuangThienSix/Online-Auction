'use strict';
const jwt = require('jsonwebtoken');

module.exports = () => {
  return async (ctx, next) => {
    if (ctx.request.url.indexOf('/api/v1/auth') === -1) {
      // TODO: Validate token here, add roles and permission -> ctx
      let valid = true;

      ctx.roles = [];
      ctx.permissions = [];
      if (!valid) {
        return ctx.showError('401 Unauthorized', 401);
      }
    }

    await next();
  };
};
 