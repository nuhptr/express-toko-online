const jwt = require("jsonwebtoken");

module.exports = {
  auth: (req, res, next) => {
    try {
      const decode = jwt.verify(req.headers.token, "secret");

      if (decode) {
        req.user = decode.user;
        next();
      }
    } catch (error) {
      res.status(401).json({
        message: "Invalid Token",
      });
    }
  },
};
