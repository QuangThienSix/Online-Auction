import {
  load
} from '../db';

const TBL_USER = 'users';
export const singleByUserName = async (username,password) => {
  const rows = await load(`select * from ${TBL_USER} where username = '${username}'`);
  if (rows.length === 0)
    return null;
  return rows[0];
}