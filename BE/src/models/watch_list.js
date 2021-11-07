import { load, add } from "../db";

const TBL_watch_list = "watch_list";

export const addwatch_list = async (entity) => {
  return await add(TBL_watch_list, entity);
};
export const deletewatch_list = async (entity) => {
  return await delete (TBL_watch_list, entity);
};

export const getwatch_list = async (bidder_id) => {
  const rows = await load(
    `select * from ${TBL_watch_list} where bidder_id = ${bidder_id}`
  );
  if (rows.length === 0) return null;
  return rows;
};

export const getBidderHasMaxPrice = async (product_id) => {
  const rows = await load(
    `select pb.bidder_id, max(price) as max_price, pb.created_at, pb.updated_at, u.fullname, u.email, u.address from ${TBL_watch_list} pb left join users u on u.user_id = pb.bidder_id where pb.product_id = '${product_id}'`
  );

  if (rows.length === 0) {
    return null;
  } else {
    return rows;
  }
};
