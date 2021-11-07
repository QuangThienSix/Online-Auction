import BaseController from "./baseController";
import { getTokenForUser, deCodeTokenForUser, sendMail } from "../lib/utils";
import { logger } from "../lib/utils";
import {
  singleByUserName,
  updateRefreshToken,
  isValidRefreshToken,
  singleByMail,
  updateIslock,
  addUser,
} from "../models/user";
import bcrypt from "bcrypt";
import appConfig from "../config/env/app.dev.json";
import rn from "random-number";
import apiConfig from "../config/api";
const express = require('express');
const multer = require('multer');
const path = require('path');
var options = {
  // example input , yes negative values do work
  min: 1000,
  max: 9999,
};
class UploadController extends BaseController {
  constructor() {
    super();

    this.single = this.single.bind(this);
    //  this.multiple = this.multiple.bind(this);
  }

  async single(req, res) {
    logger.info("uploadfile");
  
    var form = new formidable.IncomingForm();
    //Thiết lập thư mục chứa file trên server
    form.uploadDir = "uploads/";
    //xử lý upload
    form.parse(req, function (err, fields, file) {
        //path tmp trên server
        var path = file.files.path;
        //thiết lập path mới cho file
        var newpath = form.uploadDir + file.files.name;
        fs.rename(path, newpath, function (err) {
            if (err) throw err;
            res.end('Upload Thanh cong!');
        });
    });
    return;

    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database

    var finalImg = {
      contentType: req.file.mimetype,
      image: new Buffer(encode_image, 'base64')
    };

    console.log(img);

    const { accessToken } = req.body;

    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      this.responseSuccess(res, parseToken);
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

export default new UploadController();
