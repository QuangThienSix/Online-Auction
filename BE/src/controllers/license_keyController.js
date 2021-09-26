import BaseController from './baseController';
import logger from '../lib/utils/logger';
import {
  singleByLicenseKey,
  AddLicenseKey
}
from '../models/license_key'
import md5 from 'md5'
import {
  getTokenForUser,
  deCodeTokenForUser
} from '../lib/utils/userToken';

class LicenseKeyController extends BaseController {
  constructor() {
    super();
    // pinning context, when used in routers 
    this.LicenseKey = this.LicenseKey.bind(this);
    this.AddLicenseKey = this.AddLicenseKey.bind(this);
  }

  async LicenseKey(req, res) {
    logger.info('Update LicenseKey');
    const {
      key,
      secret,
      domain,
      root
    } = req.body;
    logger.info(key, secret, domain,root);
    const data = await singleByLicenseKey(key, secret);
    if (data) {
      logger.info('Have LicenseKey');
      if (domain == data.domain) {
        logger.info('Succuss LicenseKey');
        return this.responseSuccess(res, {
          "status": "success",
          "message": "license success"
        });
      } else {
        logger.info('Error LicenseKey');
        return this.responseSuccess(res, {
          'status': 'error',
        });
      }
    }
    return this.responseSuccess(res, {
      'status': 'error',
    });
    // const token = getTokenForUser(username);
  }

  // Add Key
  async AddLicenseKey(req, res) {
    logger.info('Add LicenseKey');
    const {
      api_key,
      domain,
    } = req.body;
    if (!api_key || !domain) {
      return this.responseError(res, 'You must provide api_key and api_key_secret and domain');
    }
    const token = getTokenForUser(api_key);

    const dataBody = {
      'api_key': md5(api_key),
      'api_key_secret': token,
      'domain': domain,
      'root': 1,
      'status': 1,
      'token': token,
    }
    try {
      const data = await AddLicenseKey(dataBody);
      logger.info('Success Add LicenseKey');
      return this.responseSuccess(res, {
        "status": "success",
        api_key,
        domain,
      });
    } catch (error) {
      logger.info('Error Add LicenseKey');
      return this.responseSuccess(res, {
        'status': 'error',
      });
    }
  }
}
export default new LicenseKeyController();