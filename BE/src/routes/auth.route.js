const {
  RegisterHandler,
  LoginHandler,
  ForgotPasswordHandler,
  ChangePasswordHandler,
  ResetPasswordHandler,
} = require('../controllers/auth');
const permissions = require('../middlewares/permission.mdw');

const AuthRoutes = (path) => {
  return [
    {
      method: 'post',
      path: `${path}/register`,
      validate: RegisterHandler.registerValidate,
      handler: RegisterHandler.register,
    },
    {
      method: 'post',
      path: `${path}/login`,
      validate: LoginHandler.loginValidate,
      handler: LoginHandler.login,
    },
    {
      method: 'post',
      path: `${path}/forgot-password`,
      validate: ForgotPasswordHandler.forgotPasswordValidate,
      handler: ForgotPasswordHandler.forgotPassword,
    },
    {
      method: 'post',
      path: `${path}/reset-password`,
      validate: ResetPasswordHandler.resetPasswordValidate,
      handler: ResetPasswordHandler.resetPassword,
    },
    {
      method: 'post',
      path: `${path}/change-password`,
      pre: permissions(),
      validate: ChangePasswordHandler.changePasswordValidate,
      handler: ChangePasswordHandler.changePassword,
    },
  ];
};

module.exports = AuthRoutes;
