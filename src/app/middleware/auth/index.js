const jwt = require("../../helpers/jsonwebtoken/index");

module.exports = {
  verifyToken(req, res, next) {
    const { token } = req.headers

    if (!token || token == null || token == undefined)
      return res.status(400).json({ message: "Token invalid" });


    //trata error de token para não crachar aplicação
    try {
      const verified = jwt.verifyToken(token)
      req.user = verified

    } catch (err) {
      return res.status(400).json(err)
    
    }
    next();
  },
};
