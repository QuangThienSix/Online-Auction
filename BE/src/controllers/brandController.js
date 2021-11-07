import BaseController from "./baseController";
import { getTokenForUser, deCodeTokenForUser, sendMail } from "../lib/utils";
import { logger } from "../lib/utils";
import { addBrand, updateBrand, deleteBrand, getBrand } from "../models/brand";
import bcrypt from "bcrypt";
import appConfig from "../config/env/app.dev.json";
import rn from "random-number";
import apiConfig from "../config/api";
import {getNow} from "../db"
var options = {
  // example input , yes negative values do work
  min: 1000,
  max: 9999,
};
class BrandController extends BaseController {
  constructor() {
    super();
    // pinning context, when used in routers
    this.creatBrand = this.creatBrand.bind(this);
    this.updateBrand = this.updateBrand.bind(this);
    this.deleteBrand = this.deleteBrand.bind(this);
    this.getBrand = this.getBrand.bind(this);
  }
  async creatBrand(req, res) {
    logger.info("creatBrand");
    const token =  req.headers["x-access-token"];
    const { data } = req.body;
    console.log(token);
    const parseToken = deCodeTokenForUser(token);
    console.log(parseToken);
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
        data.created_at = getNow();
        data.updated_at = getNow();
        console.log(parseToken.payload);
        let result = await addBrand(data);
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
  async updateBrand(req, res) {
    logger.info("updateBrand");
    const token =  req.headers["x-access-token"];
    const { data } = req.body;
    const parseToken = deCodeTokenForUser(token);
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
        data.updated_at = getNow();
        let result = await updateBrand(data);
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
  async deleteBrand(req, res) {
    logger.info("deleted brand");
    const token =  req.headers["x-access-token"];
    const {  data } = req.body;
    const parseToken = deCodeTokenForUser(token);
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
        let result = await deleteBrand(data);
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
  async getBrand(req, res) {
    logger.info("getBrand");
    const brand_id = req.params.id;
    const {id} = req.params;
    console.log(id);
    try {
      let result = await getBrand(brand_id);
      console.log(result);
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

export default new BrandController();
