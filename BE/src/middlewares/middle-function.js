module.exports = () => {
  return async (ctx, next) => {
    ctx.showResult = (body, status) => {
      ctx.status = status || 200;
      ctx.body = {
        success: true,
        data: body,
      };
    };

    ctx.showError = (message, status) => {
      ctx.status = status || 400;
      ctx.body = {
        success: false,
        message,
      };
    };

    await next();
  };
};
