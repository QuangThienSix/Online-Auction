import {
  load,
  add
} from "../db";

const TBL_CATEGORY = "category";
const TBL_BRAND = "brand";

export const singleByCategoryName = async (id) => {
  const rows = await load(
    `select * from ${TBL_CATEGORY} where id = '${id}'  and is_deleted =  '0'`
  );
  if (rows.length === 0) return null;
  return rows[0];
};

export const addCateroy = async (entity) => {
  return await add(TBL_CATEGORY, entity);
};
export const updateCateroy = async (entity) => {
  return await update(TBL_CATEGORY, entity);
};

export const deleteCateroy = async (id) => {
  const rows = await load(
    `update ${TBL_CATEGORY} set is_deleted='1' where id='${id}'`
  );
  if (rows.length === 0) return null;
  return rows[0];
};

export const getCateroy = async () => {
  const rows = await load(
    `SELECT a.* , 
    (SELECT JSON_ARRAYAGG(JSON_OBJECT('name', b.name, 'id', b.id)) from brand b WHERE b.category_id = a.id and b.is_deleted = 0) as 'brands'
    FROM ${TBL_CATEGORY} a
    WHERE a.is_deleted = 0`
  );
  if (rows.length === 0) return null;
  return rows;
};

export const getListCategoryAndBrand = async () => {
  const rows = await load(
    `select c.name as category_name, c.id as category_id, c.created_at as category_created_at, c.updated_at as category_updated_at, b.id as brand_id, b.name as brand_name, b.created_at as brand_created_at, b.updated_at as brand_updated_at from ${TBL_CATEGORY} c join ${TBL_BRAND} b on b.category_id = c.id where b.is_deleted = 0 and c.is_deleted = 0`
  );

  if (rows.length === 0) return null;
  return rows;
};