'use strict';

const router = require('koa-joi-router');
const { Recruitment } = require('../../models/recruitment.model');
const {
  getPayloadAuthorization,
} = require('../../shared/functions/get-payload-authorization');

const Joi = router.Joi;

const rejectPostValidate = {
  body:{
    recruitmentId:Joi.string(),
    reason: Joi.string().required(),
  },   
  type: "json",
  output: {
    200: {
      body: {
        success: Joi.boolean(),
        data: Joi.any(),
      },
    },
  },
};

const rejectPost = async (ctx) => {
 const {recruitmentId,reason} = ctx.request.body ;
 console.log(recruitmentId)
 console.log(reason)
 let result = await Recruitment.findOneAndUpdate(
    { _id: recruitmentId},
    { status:0,reason: reason },
    { new: true }
  );
  if (result === 0) return ctx.showError('Error', 404);
  return ctx.showResult({
    result
  });
};

const rejectPostHandler = {
  rejectPost,
  rejectPostValidate,
};

module.exports = rejectPostHandler;
