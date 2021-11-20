import { load, add } from "../db";

export const getProductBidding = async (bidderid) => {
  const rows = await load(
    `select * from product p where is_deleted = 0 and (is_done is null or is_done = 0) and p.time_end > now() and p.id in (select pb.product_id from product_bidder pb WHERE pb.bidder_id =  ${bidderid})`
  );

  if (rows.length === 0) return null;
  return rows;
};

export const getProductBidderCompleted = async (bidderid) => {
  const rows = await load(
    `select p.id, Max(pb.price) as max_price from product p join product_bidder pb on pb.product_id = p.id where pb.bidder_id = ${bidderid} and p.time_end < now()  group by pb.product_id`
  );

  if (rows.length === 0) return null;
  return rows;
};

export const getProductBidderMaxPrice = async (id) => {
  const rows = await load(
    `select p.id, Max(pb.price) as max_price from product p join product_bidder pb on pb.product_id = p.id where pb.product_id = ${id} group by pb.product_id`
  );

  if (rows.length === 0) return null;
  return rows;
};
