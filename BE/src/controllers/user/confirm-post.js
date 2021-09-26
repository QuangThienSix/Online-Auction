'use strict';

const router = require('koa-joi-router');
const { Recruitment } = require('../../models/recruitment.model');
const {
  getPayloadAuthorization,
} = require('../../shared/functions/get-payload-authorization');

const Joi = router.Joi;

const confirmPostValidate = {
  output: {
    200: {
      body: {
        success: Joi.boolean(),
        data: Joi.any(),
      },
    },
  },
};

const confirmPost = async (ctx) => {
 const recruitmentId = ctx.request.body.recruitmentId ;
 console.log(recruitmentId)
 let result = await Recruitment.findOneAndUpdate(
    { _id: recruitmentId},
    { status: 1 },
    { new: true }
  );
  if (result === 0) return ctx.showError('Duyệt thất bại', 404);
  return ctx.showResult({
    result
  });
};

const confirmPostHandler = {
  confirmPost,
  confirmPostValidate,
};

module.exports = confirmPostHandler;
