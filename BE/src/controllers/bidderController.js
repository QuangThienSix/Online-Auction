import BaseController from "./baseController";
import { getTokenForUser, deCodeTokenForUser, sendMail } from "../lib/utils";
import { logger } from "../lib/utils";
import { getProductBidding } from "../models/bidder";
var options = {
  // example input , yes negative values do work
  min: 1000,
  max: 9999,
};

class BidderController extends BaseController {
  constructor() {
    super();
    this.getProductBidding = this.getProductBidding.bind(this);
  }

  async getProductBidding(req, res) {
    logger.info("get product bidding");
    const token = req.headers["x-access-token"];

    const parseToken = deCodeTokenForUser(token);
    if (parseToken) {
      try {
        let biiderid = parseToken.payload.user_id;

        let result = await getProductBidding(biiderid);

        return this.responseSuccess(res, result);
      } catch (err) {
        return this.responseError(
          res,
          {
            message: exception,
          },
          500
        );
      }
    }
  }
}

export default new BidderController();
