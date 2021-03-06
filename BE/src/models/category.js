import { load, add, getNow } from "../db";

const TBL_CATEGORY = "category";
const TBL_BRAND = "brand";

export const singleByCategoryName = async (id) => {
  const rows = await load(`select * from ${TBL_CATEGORY} where id = '${id}'`);
  if (rows.length === 0) return null;
  return rows[0];
};
export const getCategoryNoBrand = async () => {
  const rows = await load(`select * from ${TBL_CATEGORY}`);

  if (rows.length === 0) return null;
  return rows;
};

export const creatCategory = async (entity) => {
  return await add(TBL_CATEGORY, entity);
};
export const updateCateroy = async (entity) => {
  const rows = await load(
    `UPDATE category set 
    name = '${entity.name}',
    is_deleted = ${entity.is_deleted}
    WHERE id = ${entity.id}`
  );
  if (rows.length === 0) return null;
  return rows[0];
};

export const deleteCateroy = async (id) => {
  const rows = await load(
    `update ${TBL_CATEGORY} set is_deleted=1 where id=${id}`
  );
  if (rows.length === 0) return null;
  return rows[0];
};

export const getCateroy = async () => {
  const rows = await load(
    `SELECT a.* , 
    (SELECT CONCAT(
    '[', 
    GROUP_CONCAT(JSON_OBJECT('name', b.name, 'id', b.id,'is_deleted',b.is_deleted)),
    ']'
)  from brand b WHERE b.category_id = a.id) as 'brands'
FROM ${TBL_CATEGORY} a
   `
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
