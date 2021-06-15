const bcryptHelper = require('../helpers/bcrypt/index')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const bodyData = req.body;
    const {username, email, password,bio, image} = bodyData

    try {

      const hasUser = await User.findOne({ where: { email: email } })
      if(hasUser) return res.status(400).json({message:"Email already exists"})

      const encryptedPassword = await bcryptHelper.encryptPassword(password)

      const newUser = await User.create({
        username: username, 
        email: email, 
        password: encryptedPassword,
        bio: bio,
        image: image
      });
      
      //Oculta a senha no retorno
      

      return res.status(200).json(newUser);

    } catch (error) {
      return res.status(404).json(error);
    }
  },


  async index(req, res) {

    try {
      const users = await User.findAll();

      return res.status(200).json({users});
      

    } catch (error) {
      
      return res.status(404).json(err);
    }
  },

  async update(req, res) {
    
    const {username, password, email, bio, image} = req.body
    const {user_id} = req.params
     
        await User.update(
      {
        username,
        password,
        email,
        bio,
        image
      },
      {
        where: {
          id: user_id,
        },
      }
    )
    return res.status(200).json({
      username,
      password,
      email,
      bio,
      image
    });
  },
  
};
