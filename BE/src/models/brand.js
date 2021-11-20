import { remove } from "winston";
import { load, add, update, del, getNow } from "../db";

const TBL_BRAND = "brand";

export const singleByCategoryName = async (id) => {
  const rows = await load(
    `select * from ${TBL_BRAND} where id = '${id}'  and is_deleted =  0`
  );
  if (rows.length === 0) return null;
  return rows[0];
};

export const addBrand = async (entity) => {
  return await add(TBL_BRAND, entity);
};
export const updateBrand = async (entity) => {
  const rows = await load(
    `
    UPDATE brand set 
    name	= '${entity.name}',
    category_id	= '${entity.category_id}',
    is_deleted = ${entity.is_deleted}
    WHERE id = ${entity.id}`
  );
  if (rows.length === 0) return null;
  return rows[0];
};

export const deleteBrand = async (id) => {
  const rows = await load(
    `update ${TBL_BRAND} set is_deleted=1  where id=${id}`
  );
  if (rows.length === 0) return null;
  return rows[0];
};

export const getBrand = async (id) => {
  const rows = await load(`select * from ${TBL_BRAND} where id = ${id}`);
  if (rows.length === 0) return null;
  return rows[0];
};
