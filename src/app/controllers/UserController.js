const bcryptHelper = require("../helpers/bcrypt/index");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const bodyData = req.body;
    const { username, email, password, bio, image } = bodyData;

    try {//verifica se o email já é cadastrado
      const hasUser = await User.findOne({ where: { email: email } });
      if (hasUser)
        return res.status(403).json({ message: "Email already exists" });

    
      //Oculta a senha no retorno
      const encryptedPassword = await bcryptHelper.encryptPassword(password);
      const newUser = await User.create({
        username: username,
        email: email,
        password: encryptedPassword,
        bio: bio,
        image: image,
      });

      
      return res.status(200).json({
        Username: newUser.username,
        Email: newUser.email,
        Bio: newUser.bio,
        Image: newUser.image,
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async index(req, res) {
    try {
      const { username } = req.params;

      const hasUsers = await User.findOne({ where: { username: username } });
      const user = {
        id: hasUsers.id,
        user:hasUsers.username,
        email:hasUsers.email,
        bio:hasUsers.bio,
        image:hasUsers.image
      }
      if (hasUsers == null)
        return res.status(404).json({ message: "User not found" });

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(400).json(err);
    }
  },
  

  async update(req, res) {
    const { username, password, email, bio, image } = req.body;

    const token = req.user;
    const { payload } = token;
    const user_id = payload.id;

    await User.update(
      {
        username,
        password,
        email,
        bio,
        image,
      },
      {
        where: {
          id: user_id,
        },
      }
    );
    return res.status(200).json({
      username,
      password,
      email,
      bio,
      image,
    });
  },
}; 
