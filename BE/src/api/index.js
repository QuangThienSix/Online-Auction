import {
  version
} from '../../package.json';
import {
  Router
} from 'express';
import auth from './auth';


/**
 * API Resources
 */
export default () => {
  let api = Router();

  api.get('/', (req, res) => {
    res.json({
      version
    });
  });

  // auth
  api.use('/auth', auth);
  
  // bul


  return api;
}