import { load, add } from "../db";

const TBL_transform_seller = "transform_seller";


export const addtransform_seller = async (entity) => {
  return await add(TBL_transform_seller, entity);
};

export const gettransform_seller = async () => {
  const rows = await load(
    `select * from ${TBL_transform_seller} where product_id = ${product_id}`
  );
  if (rows.length === 0) return null;
  return rows;
};

