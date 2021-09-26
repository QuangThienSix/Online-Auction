'use strict';

const router = require('koa-joi-router');
const { Recruitment } = require('../../models/recruitment.model');
const {
  getPayloadAuthorization,
} = require('../../shared/functions/get-payload-authorization');

const Joi = router.Joi;

const userGetListCandidateAppliedValidate = {
  output: {
    200: {
      body: {
        success: Joi.boolean(),
        data: Joi.any(),
      },
    },
  },
};

const userGetListCandidateApplied = async (ctx) => {
  const recruitmentId = ctx.request.body.recruitmentId;
  let recruiment = await Recruitment.findOne(
    {
      _id: recruitmentId,
    },
    { candidates: 1 }
  );

  return ctx.showResult({
    candidates: recruiment?.candidates || [],
  });
};

const userGetListCandidateAppliedHandler = {
  userGetListCandidateApplied,
  userGetListCandidateAppliedValidate,
};

module.exports = userGetListCandidateAppliedHandler;
