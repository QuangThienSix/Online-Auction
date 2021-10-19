import { verifyTokenForUser } from "../lib/utils/userToken";

import { logger } from "../lib/utils";

export const authMdw = function (req, res, next) {
  const accessToken = req.headers["x-access-token"];
  if (accessToken) {
    try {
      const decoded = verifyTokenForUser(accessToken);
      req.accessTokenPayload = decoded;
      next();
    } catch (err) {
      logger.info("MDW auth: ", err);
      return res.status(401).json({
        message: "Invalid access token.",
      });
    }
  } else {
    logger.info("MDW no accessToken: ");
    return res.status(400).json({
      message: "Access token not found.",
    });
  }
};
