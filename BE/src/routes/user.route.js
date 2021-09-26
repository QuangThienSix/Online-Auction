const {
  UpdateProfileHandler,
  UserProfileHandler,
  userGetListApplyJobHandler,
  userGetListCandidateAppliedHandler,
  getListPostUnactiveHandler,
  confirmPostHandler,
  rejectPostHandler,
} = require('../controllers/user');
const permissions = require('../middlewares/permission.mdw');

const UserRoutes = (path) => {
  return [
    {
      method: 'get',
      path: `${path}/profile`,
      pre: permissions(),
      validate: UserProfileHandler.userProfileValidate,
      handler: UserProfileHandler.userProfile,
    },
    {
      method: 'put',
      path: `${path}/profile`,
      pre: permissions(),
      validate: UpdateProfileHandler.updateProfileValidate,
      handler: UpdateProfileHandler.updateProfile,
    },
    {
      method: 'get',
      path: `${path}/get-list-job-applied`,
      pre: permissions(),
      validate: userGetListApplyJobHandler.userGetListApplyJobValidate,
      handler: userGetListApplyJobHandler.userGetListApplyJob,
    },
    {
      method: 'get',
      path: `${path}/get-list-candidate-apply-job`,
      pre: permissions(),
      validate:
        userGetListCandidateAppliedHandler.userGetListCandidateAppliedValidate,
      handler: userGetListCandidateAppliedHandler.userGetListCandidateApplied,
    },
    {
      method: 'get',
      path: `${path}/get-list-post-unactive`,
      pre: permissions(),
      validate: getListPostUnactiveHandler.getListPostUnactiveValidate,
      handler: getListPostUnactiveHandler.getListPostUnactive,
    },
    {
      method: 'post',
      path: `${path}/confirm-post`,
      pre: permissions(),
      validate: confirmPostHandler.confirmPostValidate,
      handler: confirmPostHandler.confirmPost,
    },
    {
      method: 'post',
      path: `${path}/reject-post`,
      pre: permissions(),
      validate: rejectPostHandler.rejectPostValidate,
      handler: rejectPostHandler.rejectPost,
    },
  ];
};

module.exports = UserRoutes;
