import BaseController from "./baseController";
import { getTokenForUser, deCodeTokenForUser, sendMail } from "../lib/utils";
import logger from "../lib/utils/logger";
import {
  singleByProductId,
  addProduct,
  deleteProduct,
  updateProduct,
  top5Ratting,
  top5Price,
  top5Active,
  search,
  top5Recoment,

} from "../models/products";
import bcrypt from "bcrypt";
import appConfig from "../config/env/app.dev.json";
import rn from "random-number";
import apiConfig from "../config/api";

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
    this.getProduct = this.getProduct.bind(this);
  }

  async creatProduct(req, res) {
    logger.info("creatProduct");
    const { accessToken, data } = req.body;

    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
      if (parseToken.payload.roles_id != 1 &&parseToken.payload.roles_id != 3 )
        return this.responseError(
          res,
          {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
      try {
        let result = await addProduct(data);
        return this.responseSuccess(res, result);
      }
      catch (exception) {
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
    const { accessToken, data } = req.body;
    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
      if (parseToken.payload.roles_id != 1 &&parseToken.payload.roles_id != 3 )
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
      }
      catch (exception) {
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
    const { accessToken, data } = req.body;
    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
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
        let result = await deleteProduct(data);
        return this.responseSuccess(res, result);
      }
      catch (exception) {
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
    logger.info("getProduct");
    try {
      const {product_id } = req.params.id
      let result = await singleByProductId(product_id);
      console.log(result);
      return this.responseSuccess(res, result);
    }
    catch (error) {
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
    logger.info("getProduct");
    try {
      let result = await top5Ratting();
      return this.responseSuccess(res, result);
    }
    catch (error) {
      return this.responseError(
        res,
        {
          message: error,
        },
        500
      );
    }
  }
  async getTop5ProductPrice(req, res) {
    logger.info("getProduct");
    try {
      let result = await top5Price();
      return this.responseSuccess(res, result);
    }
    catch (error) {
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
    logger.info("getProduct");
    try {
      let result = await top5Active();
      return this.responseSuccess(res, result);
    }
    catch (error) {
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
    logger.info("getProduct");
    try {
      let result = await top5Recoment();
      return this.responseSuccess(res, result);
    }
    catch (error) {
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
    logger.info("getProduct");
    try {
      const {query,page,size } =req.query
      let result = await search(query,page,size);
      return this.responseSuccess(res, result);
    }
    catch (error) {
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
