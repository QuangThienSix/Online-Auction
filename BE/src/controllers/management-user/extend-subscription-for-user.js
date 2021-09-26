'use strict';

const router = require('koa-joi-router');
const { User } = require('../../models/user.model');
const Joi = router.Joi;

const extendSubscriptionForUserValidate = {
  params: {
    id: Joi.string().required(),
  },
  body: {
    expirationDate: Joi.date().required(),
    numberOfRemainPost: Joi.number().min(0).default(10),
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

const extendSubscriptionForUser = async (ctx) => {
  console.log(ctx.params);
  const { id } = ctx.params;
  const { expirationDate, numberOfRemainPost } = ctx.request.body;
  const startDate = new Date();
  const endDate = new Date(expirationDate);

  if (endDate.getTime() < startDate.getTime())
    return ctx.showError(
      'Thời gian hết hạn phải lớn hơn thời gian hiện tại',
      400
    );

  const user = await User.findOne({ _id: id });
  if (!user) return ctx.showError('Không tìm thấy user', 404);

  user.subscription = {
    startDate,
    endDate,
    numberOfRemainPost,
  };
  await user.save();

  return ctx.showResult(null);
};

const ExtendSubscriptionForUserValidateHandler = {
  extendSubscriptionForUser,
  extendSubscriptionForUserValidate,
};

module.exports = ExtendSubscriptionForUserValidateHandler;
