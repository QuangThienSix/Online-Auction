'use strict';

module.exports = () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      ctx.status = 500;
      return (ctx.body = {
        success: false,
        message: error.message,
      });
    }
  };
};
