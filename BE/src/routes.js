'use strict';

const routerJoi = require('koa-joi-router');
const publicRouter = routerJoi();

const home = require('./controllers/home');
const permissions = require('./middlewares/permission.mdw');
const RecruitmentRoutes = require('./routes/recruitment.route');
const AuthRoutes = require('./routes/auth.route');
const UserRoutes = require('./routes/user.route');
const ManagementUserRoutes = require('./routes/management-user.route');
const ManagementRecruitmentRoutes = require('./routes/management-recruitment.route');
const TopCompanyRoutes = require('./routes/top-company.route');

/**
 * @description: path prefix '/v1/api/' use for data services, path '/v1/auth/ use for authen services.
 *
 */

const version = '/api/v1';
publicRouter.route({
  method: 'get',
  path: `${version}/home`,
  pre: permissions(),
  handler: home.home,
});

publicRouter.route(AuthRoutes(`${version}/auth`));
publicRouter.route(UserRoutes(`${version}/user`));
publicRouter.route(RecruitmentRoutes(`${version}/recruitment`));
publicRouter.route(ManagementUserRoutes(`${version}/management-user`));
publicRouter.route(
  ManagementRecruitmentRoutes(`${version}/management-recruitment`)
);
publicRouter.route(TopCompanyRoutes(`${version}/top-company`));

module.exports = { publicRouter };
