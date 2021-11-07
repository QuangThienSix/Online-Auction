import { remove } from "winston";
import { load, add, update, del,getNow } from "../db";

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
  console.log(entity);
  const rows = await load(
    `
    UPDATE brand set 
    name	= '${entity.name}',
    updated_at= ${entity.updated_at},
    category_id = ${entity.category_id}
    WHERE id = ${entity.id}`
  );
  console.log(rows);
  if (rows.length === 0) return null;
  return rows[0];
};

export const deleteBrand = async (id) => {
  const rows = await load(
    `update ${TBL_BRAND} set is_deleted=1 ,   updated_at= ${getNow()}, where id=${id}`
  );
  if (rows.length === 0) return null;
  return rows[0];
};

export const getBrand = async (category_id) => {
  const rows = await load(
    `select * from ${TBL_BRAND} where category_id = ${category_id} and  is_deleted =  0`
  );
  if (rows.length === 0) return null;
  return rows;
};
