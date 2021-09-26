import jwt from 'jsonwebtoken';
import apiConfig from '../../config/api';

/**
 * Token For User
 * Sets a token based on user id and
 * secret key
 * 
 * @param {object} user - user data
 * @returns token
 */


export const getTokenForUser = (user) => {
  const timestamp = +new Date();
  return jwt.sign({
    sub: user,
    iat: timestamp
  }, apiConfig.secretKey);
}
export const deCodeTokenForUser = (token) => {
  const decoded = jwt.decode(token, {
    complete: true
  });
  return decoded;
}