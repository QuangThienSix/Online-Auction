import BaseController from "./baseController";
import {
  getTokenForUser,
  deCodeTokenForUser,
  sendMail,
  getPagingData,
  logger,
  responsePaginationSuccess,
} from "../lib/utils";
import {
  singleByProductId,
  addProduct,
  auction,
  deleteProduct,
  updateProduct,
  top5Ratting,
  top5Price,
  top5Active,
  search,
  top5Recoment,
  ProductDetail,
  getTop5RelationByCategoryId,
  getProductByCategoryId,
} from "../models/products";
import bcrypt from "bcrypt";
import appConfig from "../config/env/app.dev.json";
import rn from "random-number";
import apiConfig from "../config/api";
import { getNow } from "../db";
import { broadcastAll } from "../ws";
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
    this.getTop5RelationByCategoryId =
      this.getTop5RelationByCategoryId.bind(this);
    this.getProductByCategoryId = this.getProductByCategoryId.bind(this);
    this.createAuction = this.createAuction.bind(this);
  }

  async creatProduct(req, res) {
    logger.info("creatProduct");
    const { accessToken, data } = req.body;

    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
      if (parseToken.payload.roles_id != 1 && parseToken.payload.roles_id != 3)
        return this.responseError(
          res,
          {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
      try {
        data.created_at = getNow();
        data.updated_at = getNow();
        let result = await addProduct(data);
        return this.responseSuccess(res, result);
      } catch (exception) {
        return this.responseError(res, { message: exception }, 500);
      }
    } else {
      return this.responseError(
        res,
        {
          authenticated: false,
          message: "token incorrect",
        },
        400
      );
    }
  }
  async updateProduct(req, res) {
    logger.info("updateProduct");
    const { data } = req.body;
    const accessToken = req.headers["x-access-token"];
    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
      if (parseToken.payload.roles_id != 1 && parseToken.payload.roles_id != 3)
        return this.responseError(
          res,
          {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
      try {
        let result = await updateProduct(data);
        return this.responseSuccess(res, result);
      } catch (exception) {
        return this.responseError(res, { message: exception }, 500);
      }
    } else {
      return this.responseError(
        res,
        {
          authenticated: false,
          message: "token incorrect",
        },
        400
      );
    }
  }
  async deleteProduct(req, res) {
    logger.info("deleteProduct");
    const { data } = req.body;
    const accessToken = req.headers["x-access-token"];
    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      if (parseToken.payload.roles_id != 1)
        return this.responseError(
          res,
          {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
      try {
        data.updated_at = getNow();
        let result = await deleteProduct(data);
        return this.responseSuccess(res, result);
      } catch (exception) {
        return this.responseError(res, { message: exception }, 500);
      }
    } else {
      return this.responseError(
        res,
        {
          authenticated: false,
          message: "token incorrect",
        },
        400
      );
    }
  }
  async getProductById(req, res) {
    logger.info("getProduct id");
    try {
      const { product_id } = req.params.id;
      let result = await singleByProductId(product_id);
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res,
        {
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
        res,
        {
          message: error,
        },
        500
      );
    }
  }


  async createAuction(req, res) {
    logger.info("createAuction");
    const { data } = req.body;
    const token =  req.headers["x-access-token"];
    const parseToken = deCodeTokenForUser(token);
    if (parseToken) {
      if (parseToken.payload.roles_id ==1)
        return this.responseError(
          res,
          {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
      try {
        data.bidder_id = parseToken.payload.user_id;
        let result = await auction(data.product_id,data.bidder_id,data.price);
        if (result !=null)
        await broadcastAll("auction", data.product_id);


        return this.responseSuccess(res, result);
      } catch (exception) {
        return this.responseError(res, { message: exception }, 500);
      }
    } else {
      return this.responseError(
        res,
        {
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
        res,
        {
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
        res,
        {
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
        res,
        {
          message: error,
        },
        500
      );
    }
  }


  async Query(req, res) {
    logger.info("query Product");
    try {
      const { q, page, size } = req.query;
      let result = await search(q, page || 1, size || 10);
      console.log(result);
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
        res,
        {
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
        res,
        {
          message: error,
        },
        500
      );
    }
  }

  async getTop5RelationByCategoryId(req, res) {
    logger.info("getTop5RelationByCategoryId");
    let { category_id, product_id } = req.params;
    try {
      let result = await getTop5RelationByCategoryId(category_id, product_id);
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res,
        {
          message: error,
        },
        500
      );
    }
  }

  async getProductByCategoryId(req, res) {
    logger.info("getProductByCategoryId");

    let { category_id } = req.params;

    try {
      let result = await getProductByCategoryId(category_id);
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res,
        {
          message: error,
        },
        500
      );
    }
  }
}

export default new ProductController();
