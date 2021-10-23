import {
  version
} from '../../package.json';
import {
  Router
} from 'express';
import auth from './auth';
import category from './category';
import brand from './brand';
import product from './product';
import watchList from './watch_list';
import comment from './comment';
import transform from './transform';

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
  api.use('/category', category);
  api.use('/brand', brand);
  api.use('/product', product);
  api.use('/watch-list', watchList);
  api.use('/comment', comment);
  api.use('/transform', transform);

  // bul


  return api;
}