import {
  load,
  add
} from "../db";

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
    `  SELECT a.*, c.user_id, c.fullname,c.username,b.price as 'price_current',b.updated_at 'last_modifiers'
    FROM product a
    JOIN product_bidder b on a.id = b.product_id
    JOIN users c on b.bidder_id = c.user_id
    WHERE a.id = ${id}
    ORDER BY b.price DESC
    LIMIT 1 
    ;`
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
  const rows = await load(
    `
UPDATE product 
set name = '${entity.name}',
updated_at = ${entity.update_at},
ratting = ${entity.ratting},
time_end = ${entity.time_end},
time_start = ${entity.time_start},
price = ${entity.price},
category_id = ${entity.category_id},
category_name = '${entity.category_name}',
timestamp = ${entity.timestamp},
avatar = '${entity.avatar}',
images = ${entity.images},
current_price = ${entity.current_price}
max_price = ${entity.max_price},
count_quantity_bidder = ${entity.count_quantity_bidder},
seller_id = ${entity.seller_id},
step = ${entity.step},
is_automatic = ${entity.is_automatic},
is_done = ${entity.is_done}
WHERE id = ${entity.id}
    `
  );
  if (rows.length === 0) return null;
  return rows;

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
export const auction = async (product_id, bidder_id, price) => {
  const rows = await load(
    `CALL proc_auction(${product_id},${price},${bidder_id});
    `
  );
  if (rows.length === 0) return null;
  return rows;
};

export const getAuctionLastModifier = async (product_id) => {
  const rows = await load(
    `SELECT a.*, c.user_id, c.fullname,c.username,b.price as 'price_current',b.updated_at 'last_modifiers'
    FROM product a
    JOIN product_bidder b on a.id = b.product_id
    JOIN users c on b.bidder_id = c.user_id
    WHERE a.id = ${product_id}
    ORDER BY b.price DESC
    LIMIT 1 
    ;
    `
  );
  if (rows.length === 0) return null;
  return rows;
}
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

export const getProductByCategoryId = async (category_id) => {
  const rows = await load(
    `select * from ${TBL_PRODUCT} where category_id = ${category_id} and is_deleted = 0 order by name `
  );

  if (rows.length === 0) return null;
  return rows;
};
export const getProductByBrandId = async (brand_id) => {
  const rows = await load(
    `select * from ${TBL_PRODUCT} where brand_id = ${brand_id} and is_deleted = 0 order by name `
  );

  if (rows.length === 0) return null;
  return rows;
};
export const getProductBySeller = async (seller_id) => {
  const rows = await load(
    `select * from ${TBL_PRODUCT} where seller_id = ${seller_id} and is_deleted = 0 order by name `
  );

  if (rows.length === 0) return null;
  return rows;
};