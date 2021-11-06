import { load, add } from "../db";

const TBL_PRODUCT = "product";

export const singleByProductName = async (name) => {
  const rows = await load(
    `select * from ${TBL_PRODUCT} where name = '${name}' and is_deleted = 0`
  );
  if (rows.length === 0) return null;
  return rows[0];
};

export const singleByProductId = async (id) => {
  const rows = await load(
    `select * from ${TBL_PRODUCT} where id = '${id}' and is_deleted = 0`
  );
  if (rows.length === 0) return null;
  return rows[0];
};
export const addProduct = async (entity) => {
  return await add(TBL_PRODUCT, entity);
};

export const deleteProduct = async (data) => {
  const rows = await load(
    `update ${TBL_PRODUCT} set is_deleted='1' where id='${data.id}'`
  );
  if (rows.length === 0) return null;
  return rows[0];
};

export const updateProduct = async (entity) => {
  return await update(TBL_PRODUCT, entity);
};
export const top5Ratting = async () => {
  const rows = await load(
    `SELECT * FROM ${TBL_PRODUCT} a where  is_deleted = 0 ORDER BY a.ratting DESC LIMIT 5;
    `
  );
  if (rows.length === 0) return null;
  return rows;
};
export const top5Price = async () => {
  const rows = await load(
    `SELECT * FROM ${TBL_PRODUCT} a where  is_deleted = 0 ORDER BY a.price DESC LIMIT 5;
    `
  );
  if (rows.length === 0) return null;
  return rows;
};

export const top5Active = async () => {
  const rows = await load(
    `SELECT a.* FROM ${TBL_PRODUCT} a where  a.is_deleted = 0 and
    current_timestamp() BETWEEN a.time_start AND a.time_end  ORDER BY a.price DESC LIMIT 5;
    `
  );
  if (rows.length === 0) return null;
  return rows;
};

export const search = async (query = "", page = 1, size = 10) => {
  const rows = await load(
    `SELECT a.avatar,a.name,a.current_price,a.max_price,c.fullname,c.ratting,a.created_at,a.time_start,a.time_end,a.count_quantity_bidder
    FROM ${TBL_PRODUCT} a
    left join product_bidder b on a.id = b.product_id
    left join users c on b.bidder_id = c.user_id
    Where  a.is_deleted = 0
    and (a.name like '%${query}%' or '${query}' is null ) and (a.category_name like '%${query}%' or '${query}' is null) and (a.brand_name like '%${query}%' or '${query}' is null )
    ORDER BY a.price asc
    LIMIT ${(page - 1) * size},${size}
    `
  );
  if (rows.length === 0) return null;
  return rows;
};

export const top5Recoment = async (brand_id) => {
  const rows = await load(
    `SELECT a.* FROM ${TBL_PRODUCT} a where  a.is_deleted = 0 and
    current_timestamp() BETWEEN a.time_start AND a.time_end 
and brand_id = ${brand_id}
ORDER BY a.price DESC LIMIT 5;
    `
  );
  if (rows.length === 0) return null;
  return rows;
};

export const ProductDetail = async (product_id) => {
  const rows = await load(
    `select p.avatar, p.images, p.name, p.time_start, p.time_end, p.description, p.current_price, p.max_price,p.category_id ,u.fullname, u.address, u.email, u.ratting, u.ratting_negative from ${TBL_PRODUCT} p left join users u on p.seller_id = u.user_id where p.id = '${product_id}' and p.is_deleted = 0`
  );

  if (rows.length === 0) return null;
  return rows;
};

export const getTop5RelationByCategoryId = async (category_id, product_id) => {
  const rows = await load(
    `select * from ${TBL_PRODUCT} where id != ${product_id} and category_id = ${category_id} and is_deleted = 0 order by name desc LIMIT 5`
  );

  if (rows.length === 0) return null;
  return rows;
};
