const User = require("../models/User");
const bcrypt = require("../helpers/bcrypt/index");

const jwt = require("../helpers/jsonwebtoken/index");

module.exports = {
  async create(req, res) {
    const bodyData = req.body;
    const { email, password } = bodyData;

    try {
      //verifica se o email existe
      const hasUser = await User.findOne({ where: { email: email } });

      if (!hasUser) return res.status(404).json({ message: "User not found" });

      const passwordDTO = {
        requestPass: password,
        responsePass: hasUser.password,
      };

      const validPassword = await bcrypt.decryptPassword(passwordDTO);

      //verifica se a senha esta correta
      if (!validPassword)
        return res.status(400).json({ message: "Invalid password" });

      //importa o token do usuario
      const payload = {
        email: hasUser.email,
        id: hasUser.id,
      };

      const token = jwt.createToken(payload);

      return res.status(200).json({ message: "Logged in", token });
    } catch (error) {
      console.error(error);
      return res.status(400).json(error);
    }
  },
  
  async index(req, res) {
    const token = req.user;
    const { payload } = token;
    const email = payload.email;

    try {
      const user = await User.findOne({ where: { email: email } });

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(404).json(err);
    }
  },
};
