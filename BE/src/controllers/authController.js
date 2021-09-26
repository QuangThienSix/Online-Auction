import BaseController from './baseController';
import {
  getTokenForUser
} from '../lib/utils/userToken';
import logger from '../lib/utils/logger';
import {
  singleByUserName
}
from '../models/user'
import md5 from 'md5'

class AuthController extends BaseController {
  constructor() {
    super();
    // pinning context, when used in routers 
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.login = this.login.bind(this);
  }

  async signUp(req, res, next) {
    const {
      username,
      password
    } = req.body;

    logger.info('singUp');

  }

  async signIn(req, res) {
    logger.info('singin');
    const {
      username,
      password
    } = req.body;
    logger.info(req.body);
    const data = await singleByUserName(username);
    const token = getTokenForUser(username);
    if (data) {
      const hast = md5(md5(password) + md5(data.salt));
      // const hast =  md5(md5(password) + md5(data.salt) + md5(password));
      // console.log(hast);
      if (hast == data.password) {
        logger.info('success Login');
        
        return this.responseSuccess(res, {
          data,
        });
      } else {
        logger.info('error password Login ');
        return this.responseSuccess(res, {
          'data': {
            'status': 'error',
          }
        });
      }
    } else {
      logger.info('error username Login ');
      return this.responseError(res, 'user and password');
    }

  }
}
export default new AuthController();