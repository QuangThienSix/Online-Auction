import { load, add } from "../db";

const TBL_BRAND = "brand";

export const singleByCategoryName = async (id) => {
  const rows = await load(
    `select * from ${TBL_BRAND} where id = '${id}'  and is_deleted =  '0'`
  );
  if (rows.length === 0) return null;
  return rows[0];
};

export const addbrand = async (entity) => {
  return await add(TBL_BRAND, entity);
};
export const updatebrand = async (entity) => {
  return await update(TBL_BRAND, entity);
};

export const deletebrand = async (id) => {
  const rows = await load(
    `update ${TBL_BRAND} set is_deleted='1' where id='${id}'`
  );
  if (rows.length === 0) return null;
  return rows[0];
};

export const getbrand = async () => {
  const rows = await load(
    `select * from ${TBL_BRAND} where is_deleted =  '0'`
  );
  if (rows.length === 0) return null;
  return rows;
};

