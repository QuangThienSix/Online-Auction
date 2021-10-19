import { load, add } from "../db";

const TBL_USER = "users";

export const singleByUserName = async (username, password) => {
  const rows = await load(
    `select * from ${TBL_USER} where username = '${username}'`
  );
  if (rows.length === 0) return null;
  return rows[0];
};
export const updateRefreshToken = async (user_id, rfToken) => {
  const rows = await load(
    `update ${TBL_USER} set rfToken='${rfToken}' where user_id='${user_id}'`
  );
  if (rows.length === 0) return null;
  return rows[0];
};
export const isValidRefreshToken = async (user_id, rfToken) => {
  const rows = await load(
    `select * from ${TBL_USER} where rfToken = '${rfToken}' and user_id = '${user_id}'`
  );
  if (rows.length > 0) {
    return true;
  }
  return false;
};
export const addUser = async (entity) => {
  return await add(TBL_USER, entity);
};

export const singleByMail = async (email) => {
  const rows = await load(`select * from ${TBL_USER} where email = '${email}'`);
  if (rows.length === 0) return null;
  return rows[0];
};
export const updateIslock = async (user_id) => {
  const rows = await load(
    `update ${TBL_USER} set islock=0 where user_id='${user_id}'`
  );
  if (rows.length === 0) return null;
  return rows[0];
};
