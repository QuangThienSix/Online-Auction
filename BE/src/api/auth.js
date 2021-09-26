import {
  Router
} from 'express';
import authController from '../controllers/authController';

import {
  Validate
} from '../middleware/validate.mdw';
import schema_auth from '../schemas/auth.json';
/**
 * Follow this format for normal routing
 */



const auth = () => {
  let api = Router();
  api.post('/signup', authController.signUp);
  api.post('/signin',Validate(schema_auth), authController.signIn);
  return api;
}

export default auth();