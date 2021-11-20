import { logger } from "../lib/utils";
import BaseController from "./baseController";
import configApi from "../config/api/api.json";
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const ip = require("ip");

var options = {
  // example input , yes negative values do work
  min: 1000,
  max: 9999,
};
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    var dir = "src/uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    callback(null, dir);
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
var upload = multer({
  storage: storage,
}).array("files", 12);

class UploadController extends BaseController {
  constructor() {
    super();

    this.single = this.single.bind(this);
    this.getFile = this.getFile.bind(this);
    //  this.multiple = this.multiple.bind(this);
  }
  async single(req, res) {
    logger.info("uploadfile");
    const {
      //accessToken,
      files,
    } = req.body;

    let ipAdress = ip.address();

    //const parseToken = deCodeTokenForUser(accessToken);
    //if (parseToken)
    {
      var images = [];
      var data = await upload(req, res, function (err, result) {
        if (err) {
          return res.end("Error uploading file." + err);
        }

        req.files.map((x) => {
          images.push(x.filename);
        });

        let adress = `${ipAdress}:${configApi.port}/static/${images}`;
        res.send(adress);
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
  async getFile(req, res) {
    const { name } = req.params.name;
    res.sendFile(__dirname + `./uploads/${name}`);
  }
}

export default new UploadController();
