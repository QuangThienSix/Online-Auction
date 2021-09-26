'use strict';

const router = require('koa-joi-router');
const { Recruitment } = require('../../models/recruitment.model');
const Joi = router.Joi;

const getListPostUnactiveValidate = {
  output: {
    200: {
      body: {
        success: Joi.boolean(),
        data: Joi.any(),
      },
    },
  },
};

const getListPostUnactive = async (ctx) => {
  let listPostUnactive = await Recruitment.find({
    status: 0,
  });

  return ctx.showResult({
    listPostUnactive,
  });
};

const getListPostUnactiveHandler = {
  getListPostUnactive,
  getListPostUnactiveValidate,
};

module.exports = getListPostUnactiveHandler;
