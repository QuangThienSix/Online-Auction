'use strict';

const router = require('koa-joi-router');
const { User } = require('../../models/user.model');
const { Recruitment } = require('../../models/recruitment.model');
const { UserRoleEnum } = require('../../shared/enums/user-role.enum');
const {
  getPayloadAuthorization,
} = require('../../shared/functions/get-payload-authorization');

const Joi = router.Joi;

const updateProfileValidate = {
  body: {
    name: Joi.string().default(''),
    phoneNumber: Joi.string().default(''),
    address: Joi.string().default(''),
    photoUrl: Joi.string().default(''),
    company: Joi.string().default(''),
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

const updateProfile = async (ctx) => {
  const userPayload = getPayloadAuthorization(ctx.headers?.authorization);
  const { name, phoneNumber, address, photoUrl, company } = ctx.request.body;

  const user = await User.findOne({ email: userPayload?.email });
  if (!user) return ctx.showError('Không sửa đổi', 304);

  user.name = name;
  user.phoneNumber = phoneNumber;
  user.address = address;
  if ([UserRoleEnum.Partner, UserRoleEnum.Admin].includes(user.role)) {
    user.company = company ? company : user.company;
    user.photoUrl = photoUrl ? photoUrl : user.photoUrl;
    await Recruitment.updateMany(
      { 'user.id': user._id },
      {
        $set: {
          'user.company': user.company,
          'user.photoUrl': user.photoUrl,
        },
      }
    );
  }

  await user.save();
  return ctx.showResult({});
};

const UpdateProfileHandler = {
  updateProfile,
  updateProfileValidate,
};

module.exports = UpdateProfileHandler;
