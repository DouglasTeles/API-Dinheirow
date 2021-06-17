const User = require("../models/User");
const Articles = require("../models/Articles");

module.exports = {
  async store(req, res) {
    const token = req.user;
    const { payload } = token;
    const user_id = payload.id;

    const dataUser = await User.findByPk(user_id);
    const dataAuthor = {
      Author: dataUser.username,
      Bio: dataUser.bio,
      Imagem: dataUser.image,
    };

    const bodyData = req.body;
    const {
      title,
      slug,
      description,
      body,
      tag_list,
      favorited,
      favorites_count,
    } = bodyData;

    try {
      const newArticle = await Articles.create({
        title,
        slug,
        description,
        body,
        tag_list,
        favorited,
        favorites_count,
        user_id,
      });
      return res.status(200).json({ Aticle: newArticle, Author: dataAuthor });
    } catch (error) {
      return res.status(404).json(error);
    }
  },

  async index(req, res) {
    const {author} = req.params    
    try {

      if (author == undefined) { 
        const articles = await Articles.findAll({
          order: [["created_at", "DESC"]],
        });
        return res.status(200).json(articles);
        
      }else{
        const user = await User.findOne({where:{username: author}})
        const articles = await Articles.findAll({where:{user_id:user.id}})
        return res.status(200).json(articles);
      } 
      
    } catch (error) {
      return res.status(400).json({message:"User not found"});
    }



    
    
  }
}

