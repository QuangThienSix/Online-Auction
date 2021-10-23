import BaseController from "./baseController";
import { getTokenForUser, deCodeTokenForUser, sendMail } from "../lib/utils";
import logger from "../lib/utils/logger";
import {
   addCateroy,
   updateCateroy,
   deleteCateroy,
   getCateroy,
} from "../models/category";
import bcrypt from "bcrypt";
import appConfig from "../config/env/app.dev.json";
import rn from "random-number";
import apiConfig from "../config/api";

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
   
  }

  async creatCategory(req, res) {
    logger.info("creatCategory");
    const { accessToken ,data} = req.body;

    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
      if(parseToken.payload.roles_id!=1)
        return this.responseError(
          res,
          {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
        try{
          let result = creatCategory(data);
          return this.responseSuccess(res,result);
        }
        catch(exception)
        {
          return this.responseError( res,{message:exception},500);
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
  async updateCategory(req, res) {
    logger.info("updateCategory");
    const { accessToken ,data} = req.body;
    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
      if(parseToken.payload.roles_id!=1)
        return this.responseError(
          res,
          {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
        try{
          let result = updateCategory(data);
          return this.responseSuccess(res,result);
        }
        catch(exception)
        {
          return this.responseError( res,{message:exception},500);
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
  async deleteCategory(req, res) {
    logger.info("updateCategory");
    const { accessToken ,data} = req.body;
    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
      if(parseToken.payload.roles_id!=1)
        return this.responseError(
          res,
          {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
        try{
          let result = deleteCategory(data);
          return this.responseSuccess(res,result);
        }
        catch(exception)
        {
          return this.responseError( res,{message:exception},500);
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
  
  
}

export default new AuthController();
