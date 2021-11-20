import {
  getNow
} from "../db";
import {
  deCodeTokenForUser,
  logger,
  responsePaginationSuccess,
} from "../lib/utils";
import {
  addProduct,
  auction,
  deleteProduct,
  getProductByBrandId,
  getProductByCategoryId,
  getProductBySeller,
  getTop5RelationByCategoryId,
  ProductDetail,
  search,
  singleByProductId,
  top5Active,
  top5Price,
  top5Ratting,
  top5Recoment,
  updateProduct,
  getPrDetail,
  getProduct,
  top5CountBidder,
  top5AlmostExpiredWithPrice,
  top5AlmostExpired,
  getUserLastModifile
} from "../models/products";
import {
  broadcastAll
} from "../ws";
import BaseController from "./baseController";
var options = {
  // example input , yes negative values do work
  min: 1000,
  max: 9999,
};
class ProductController extends BaseController {
  constructor() {
    super();
    // pinning context, when used in routers
    this.creatProduct = this.creatProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.getProductById = this.getProductById.bind(this);
    this.getTop5ProductRatting = this.getTop5ProductRatting.bind(this);
    this.getTop5ProductPrice = this.getTop5ProductPrice.bind(this);
    this.getTop5ProductAcitve = this.getTop5ProductAcitve.bind(this);
    this.getTop5ProductRecoment = this.getTop5ProductRecoment.bind(this);
    this.Query = this.Query.bind(this);
    this.ProductDetail = this.ProductDetail.bind(this);
    this.getPrDetail = this.getPrDetail.bind(this);
    this.getTop5RelationByCategoryId =
      this.getTop5RelationByCategoryId.bind(this);
    this.getProductByCategoryId = this.getProductByCategoryId.bind(this);
    this.getProductByBrandId = this.getProductByBrandId.bind(this);
    this.createAuction = this.createAuction.bind(this);
    this.getProductBySeller = this.getProductBySeller.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.top5CountBidder = this.top5CountBidder.bind(this);
    this.top5AlmostExpiredWithPrice =
      this.top5AlmostExpiredWithPrice.bind(this);
    this.top5AlmostExpired = this.top5AlmostExpired.bind(this);
    this.getUserLastModifile = this.getUserLastModifile.bind(this);
  }

  async creatProduct(req, res) {
    logger.info("creatProduct");
    const {
      accessToken,
      data
    } = req.body;

    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
      if (parseToken.payload.roles_id != 1 && parseToken.payload.roles_id != 3)
        return this.responseError(
          res, {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
      try {
        data.created_at = getNow();
        data.updated_at = getNow();

        data.time_start = getNow();
        data.time_end = getNow();
        data.timestamp = getNow();
        data.is_done = 0;
        data.is_deleted = 0;
        data.ratting = 0;
        let result = await addProduct(data);
        return this.responseSuccess(res, result);
      } catch (exception) {
        return this.responseError(
          res, {
            message: exception,
          },
          500
        );
      }
    } else {
      return this.responseError(
        res, {
          authenticated: false,
          message: "token incorrect",
        },
        400
      );
    }
  }
  async updateProduct(req, res) {
    logger.info("updateProduct");

    const data = req.body;
    const accessToken = req.headers["x-access-token"];
    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
      if (parseToken.payload.roles_id != 1 && parseToken.payload.roles_id != 3)
        return this.responseError(
          res, {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
      try {
        var d = new Date(data.time_start);
        var datestring =
          d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " +
          d.getHours() + ":" + d.getMinutes();

        var da = new Date(data.time_end);
        var datestringe =
          da.getFullYear() +
          "-" +
          (
            da.getMonth() + 1
          ) +
          "-" +
          da.getDate() +
          " " +
          da.getHours() + ":" + da.getMinutes();

        data.time_start = datestring;
        data.time_end = datestringe;
        data.timestamp = getNow();
        let result = await updateProduct(data);
        return this.responseSuccess(res, result);
      } catch (exception) {
        return this.responseError(
          res, {
            message: exception,
          },
          500
        );
      }
    } else {
      return this.responseError(
        res, {
          authenticated: false,
          message: "token incorrect",
        },
        400
      );
    }
  }
  async deleteProduct(req, res) {
    logger.info("deleteProduct");
    const {
      id
    } = req.params;
    const accessToken = req.headers["x-access-token"];
    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      if (parseToken.payload.roles_id != 1)
        return this.responseError(
          res, {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
      try {
        let result = await deleteProduct(id);
        return this.responseSuccess(res, result);
      } catch (exception) {
        return this.responseError(
          res, {
            message: exception,
          },
          500
        );
      }
    } else {
      return this.responseError(
        res, {
          authenticated: false,
          message: "token incorrect",
        },
        400
      );
    }
  }
  async getProduct(req, res) {
    logger.info("getProduct");
    logger.info("req.query", req.query);
    let {
      _page,
      _limit,
      name_like,
      role,
      _sort,
      _order
    } = req.query;
    try {
      let product = await getProduct();
      if (!product) {
        return responsePaginationSuccess(
          res,
          [],
          _page,
          _limit,
          "List products successfully"
        );
      }
      _page = Number(_page);
      _limit = Number(_limit);
      const pageCount = Math.ceil(product.length / _limit);

      if (_page > pageCount) {
        _page = pageCount;
      }

      return responsePaginationSuccess(
        res,
        product,
        _page,
        _limit,
        "List products successfully"
      );
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }
  async getProductById(req, res) {
    logger.info("getProduct id");
    try {
      const {
        product_id
      } = req.params.id;
      let result = await singleByProductId(product_id);
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }
  async getProductBySeller(req, res) {
    logger.info("getProductBySeller id");
    const {
      roles_id,
      user_id
    } = req.accessTokenPayload;
    try {
      let result = await getProductBySeller(user_id);
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }
  async getTop5ProductRatting(req, res) {
    logger.info("getProduct Rattin");
    try {
      let result = await top5Ratting();
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }

  async createAuction(req, res) {
    logger.info("createAuction");
    const {
      data
    } = req.body;
    const token = req.headers["x-access-token"];
    const parseToken = deCodeTokenForUser(token);
    if (parseToken) {
      // if (parseToken.payload.roles_id == 1)
      //   return this.responseError(
      //     res, {
      //       authenticated: false,
      //       message: "Method Not Allowed",
      //     },
      //     405
      //   );
      try {
        data.bidder_id = parseToken.payload.user_id;
        await auction(data.product_id, data.bidder_id, data.price);
        const result = await singleByProductId(data.product_id);

        await broadcastAll(result);
        return this.responseSuccess(res, result);
      } catch (exception) {
        return this.responseError(
          res, {
            message: exception.message,
          },
          500
        );
      }
    } else {
      return this.responseError(
        res, {
          authenticated: false,
          message: "token incorrect",
        },
        400
      );
    }
  }

  async getTop5ProductPrice(req, res) {
    logger.info("getProduct Price");
    try {
      let result = await top5Price();
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }
  async getTop5ProductAcitve(req, res) {
    logger.info("getProduct Acitve");
    try {
      let result = await top5Active();
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }
  async getTop5ProductRecoment(req, res) {
    logger.info("getProduct Recoment");
    try {
      let result = await top5Recoment();
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }

  async Query(req, res) {
    logger.info("query Product");
    try {
      const {
        q,
        page,
        size
      } = req.query;
      let result = await search(q, page || 1, size || 10);
      try {
        let _page = Number(page || 1);
        let _limit = Number(size || 10);
        const pageCount = Math.ceil(result.length / _limit);

        if (_page > pageCount) {
          _page = pageCount;
        }

        return responsePaginationSuccess(
          res,
          result,
          _page,
          _limit,
          "List product successfully"
        );
      } catch (error) {
        logger.info("Error Product : ", error);
        return this.responseError(res, error, 401);
      }
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }

  async ProductDetail(req, res) {
    logger.info("get product details");
    try {
      let result = await ProductDetail(req.params.product_id);
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }

  async getPrDetail(req, res) {
    logger.info("getPrDetail");
    const {
      id
    } = req.params;
    try {
      let result = await getPrDetail(id);
      return res.json(result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }

  async getTop5RelationByCategoryId(req, res) {
    logger.info("getTop5RelationByCategoryId");
    let {
      category_id,
      product_id
    } = req.params;
    try {
      let result = await getTop5RelationByCategoryId(category_id, product_id);
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }

  async getProductByCategoryId(req, res) {
    logger.info("getProductByCategoryId");

    let {
      category_id
    } = req.params;

    try {
      let result = await getProductByCategoryId(category_id);
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }
  async getProductByBrandId(req, res) {
    logger.info("getProductByBrandId");

    let {
      brand_id
    } = req.params;

    try {
      let result = await getProductByBrandId(brand_id);
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }

  async top5CountBidder(req, res) {
    logger.info("top5CountBidder");
    try {
      let result = await top5CountBidder();
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }

  async top5AlmostExpiredWithPrice(req, res) {
    logger.info("top5AlmostExpiredWithPrice");
    try {
      let result = await top5AlmostExpiredWithPrice();
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }

  async top5AlmostExpired(req, res) {
    logger.info("top5AlmostExpired");
    try {
      let result = await top5AlmostExpired();
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }

  async getUserLastModifile(req, res) {

    try {
      const {
        product_id
      } = req.params
      let result = await getUserLastModifile(product_id);
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }

}

export default new ProductController();