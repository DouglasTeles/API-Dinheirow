const User = require("../models/User");
const Articles = require("../models/Articles");

module.exports = {
  async store(req, res) {
    const token = req.user;
    const { payload } = token;
    const user_id = payload.id;
    console.log(user_id);

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
      return res.status(200).json(newArticle);
    } catch (error) {
      return res.status(404).json(error);
    }
  },

  async index(req, res) {
    const author = req.params
    
    try {

      // if(author !== null){
      //   const articles = await Articles.findAll({where: {},
      //     order: [["created_at", "DESC"]],
      //   });
  
      //   return res.status(200).json(articles);
      // }

      const articles = await Articles.findAll({
        order: [["created_at", "DESC"]],
      });

      return res.status(200).json(articles);
    } catch (error) {
      return res.status(404).json(err);
    }
  },
};
