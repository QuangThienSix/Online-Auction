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
var express = require('express');
var multer  = require('multer');
var fs  = require('fs');

var options = {
  // example input , yes negative values do work
  min: 1000,
  max: 9999,
};
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
      var dir = 'src/uploads';
      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
      }
      callback(null, dir);
  },
  filename: function (req, file, callback) {
      callback(null, file.originalname);
  }
});
var upload = multer({storage: storage}).array('files', 12);

class UploadController extends BaseController {
  constructor() {
    super();

    this.single = this.single.bind(this);
    this.getFile = this.getFile.bind(this);
    //  this.multiple = this.multiple.bind(this);
  }
  async single(req, res) {
    logger.info("uploadfile");
    const { accessToken ,files} = req.body;

    //const parseToken = deCodeTokenForUser(accessToken);
    //if (parseToken) 
    {
      var images = [];
    var data = await upload(req,res,function(err,result) {
        console.log(err);
            if(err) {
                return res.end("Error uploading file."+err);
            }
         
           req.files.map(x=> images.push(x.path));
            res.send(images);
        });
     }
     //else {
    //   return this.responseError(
    //     res,
    //     {
    //       authenticated: false,
    //       message: "token incorrect",
    //     },
    //     400
    //   );
    // }
  }
  async getFile(req, res){
    const { name } = req.params.name;
    res.sendFile(__dirname + `./uploads/${name}`);
  };



}

export default new UploadController();
