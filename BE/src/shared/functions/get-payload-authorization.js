var jwt = require('jsonwebtoken');

const getPayloadAuthorization = (authorizationHeader) => {
  const token = authorizationHeader.split(' ');
  if (token && token[1]) {
    const jwtPayload = jwt.decode(token[1]);
    return jwtPayload;
  }
};

module.exports = { getPayloadAuthorization };
