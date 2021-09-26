'use strict';

const router = require('koa-joi-router');
const { Recruitment } = require('../../models/recruitment.model');
const {
  getPayloadAuthorization,
} = require('../../shared/functions/get-payload-authorization');

const Joi = router.Joi;

const userGetListApplyJobValidate = {
  output: {
    200: {
      body: {
        success: Joi.boolean(),
        data: Joi.any(),
      },
    },
  },
};

const userGetListApplyJob = async (ctx) => {
  let listJobs = await Recruitment.find({
    'candidates.id': ctx.user._id,
  });
  return ctx.showResult({
    listJobs,
  });
};

const userGetListApplyJobHandler = {
  userGetListApplyJob,
  userGetListApplyJobValidate,
};

module.exports = userGetListApplyJobHandler;
