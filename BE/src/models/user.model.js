'use strict';

const { Schema, model } = require('mongoose');
const { UserRoleEnum } = require('../shared/enums/user-role.enum');
const bcrypt = require('bcrypt');

const userSubscriptionSchema = Schema(
  {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    numberOfRemainPost: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { _id: false }
);

const userSchema = Schema({
  email: { type: String, unique: true },
  password: String,
  name: { type: String, index: true, default: '' },
  phoneNumber: { type: String, default: '' },
  address: { type: String, default: '' },
  role: { type: Number, default: UserRoleEnum.User },
  company: { type: String, default: '' },
  photoUrl: { type: String, default: '' },
  subscription: { type: userSubscriptionSchema, default: null },
});
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next();
    bcrypt.hash(this.password, salt, (hErr, hash) => {
      if (hErr) return next(hErr);
      this.password = hash;
      next();
    });
  });
});
userSchema.methods.checkPassword = function (attempt) {
  return bcrypt.compare(attempt, this.password);
};

const User = model('User', userSchema);

module.exports = {
  userSchema,
  User,
};
