import { load, add } from "../db";

export const getProductBidding = async (bidderid) => {
  const rows = await load(
    `select * from product p where is_deleted = 0 and (is_done is null or is_done = 0) and p.time_end > now() and p.id in (select pb.product_id from product_bidder pb WHERE pb.bidder_id =  ${bidderid})`
  );

  if (rows.length === 0) return null;
  return rows;
};
