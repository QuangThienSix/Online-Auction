import BaseController from "./baseController";
import {
  deCodeTokenForUser,
  logger,
  convertStringArraytoArray,
} from "../lib/utils";
import {
  creatCategory,
  updateCategory,
  deleteCategory,
  getCateroy,
  getListCategoryAndBrand,
} from "../models/category";
import bcrypt from "bcrypt";
import appConfig from "../config/env/app.dev.json";
import rn from "random-number";
import apiConfig from "../config/api";
import {
  getNow
} from "../db"
var options = {
  // example input , yes negative values do work
  min: 1000,
  max: 9999,
};
class CategoryController extends BaseController {
  constructor() {
    super();
    // pinning context, when used in routers
    this.creatCategory = this.creatCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.getCateroy = this.getCateroy.bind(this);
    this.getListCategoryAndBrand = this.getListCategoryAndBrand.bind(this);
  }

  async creatCategory(req, res) {
    logger.info("creatCategory");

    const {
      data
    } = req.body;
    const token = req.headers["x-access-token"];
    const parseToken = deCodeTokenForUser(token);

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
        data.created_at = getNow();
        data.updated_at = getNow();
        let result = await creatCategory(data);
        return this.responseSuccess(res, result);
      } catch (exception) {
        return this.responseError(res, {
          message: exception
        }, 500);
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
  async updateCategory(req, res) {
    logger.info("updateCategory");
    const {
      data
    } = req.body;
    const accessToken = req.headers["x-access-token"];
    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
      if (parseToken.payload.roles_id != 1)
        return this.responseError(
          res, {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
      try {
        data.updated_at = getNow();
        let result = await updateCategory(data);
        return this.responseSuccess(res, result);
      } catch (exception) {
        return this.responseError(res, {
          message: exception
        }, 500);
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
  async deleteCategory(req, res) {
    logger.info("deleteCategory");

    const token = req.headers["x-access-token"];
    const {
      data
    } = req.body;
    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
      if (parseToken.payload.roles_id != 1)
        return this.responseError(
          res, {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
      try {
        data.updated_at = getNow();
        let result = await deleteCategory(data);
        return this.responseSuccess(res, result);
      } catch (exception) {
        return this.responseError(res, {
          message: exception
        }, 500);
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
  async getCateroy(req, res) {
    logger.info("getCateroy");
    try {
      let result = await getCateroy();
      result.map((item) => {
        const brands = convertStringArraytoArray(item.brands);
        item.brands = brands;
      });
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

  async getListCategoryAndBrand(req, res) {
    logger.info("getListCategoryAndBrand");

    try {
      let result = await getListCategoryAndBrand();
      return this.responseSuccess(res, result);
    } catch (error) {
      console.log(error);
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }
}

export default new CategoryController();