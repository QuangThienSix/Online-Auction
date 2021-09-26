'use strict';

const { User } = require('../models/user.model');
const { UserRoleEnum } = require('../shared/enums/user-role.enum');

module.exports.home = async (ctx) => {
  return ctx.showResult('Data api home!');
};
