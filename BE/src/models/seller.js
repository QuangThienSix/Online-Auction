import { load, add } from "../db";

const TBL_PRODUCT = "product";

export const getProductSelling = async (sellerid) => {
  const rows = await load(
    `select * from ${TBL_PRODUCT} where time_end > now() and (is_done is null or is_done = 0) and is_deleted = 0 and seller_id = ${sellerid}`
  );

  if (rows.length === 0) return null;
  return rows;
};

export const getProductSold = async (sellerid) => {
  const rows = await load(
    `select * from ${TBL_PRODUCT} where time_end < now() and is_deleted = 0  and count_quantity_bidder  != 0 and seller_id = ${sellerid}`
  );
  if (rows.length === 0) return null;
  return rows;
};
