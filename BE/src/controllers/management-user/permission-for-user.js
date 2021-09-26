'use strict';

const router = require('koa-joi-router');
const { User } = require('../../models/user.model');
const { UserRoleEnum } = require('../../shared/enums/user-role.enum');
const Joi = router.Joi;

const permissionForUserValidate = {
  params: {
    id: Joi.string().required(),
  },
  body: {
    role: Joi.number().required(),
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

const permissionForUser = async (ctx) => {
  const { id } = ctx.params;
  const { role } = ctx.request.body;
  if (
    role !== UserRoleEnum.User &&
    role !== UserRoleEnum.Partner &&
    role !== UserRoleEnum.Admin
  )
    return ctx.showError('Role không hợp lệ', 400);

  const user = await User.findOne({ _id: id });
  if (!user) return ctx.showError('không tìm thấy user', 404);

  user.role = role;
  await user.save();

  return ctx.showResult(null);
};

const PermissionForUserValidateHandler = {
  permissionForUser,
  permissionForUserValidate,
};

module.exports = PermissionForUserValidateHandler;
