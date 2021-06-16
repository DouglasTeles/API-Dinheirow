const User = require("../models/User");
const Articles = require("../models/Articles");


module.exports = {
  async store(req, res) {
  
    const bodyData = req.body
    const {user_id} = req.params
    console.log(user_id)
    const {title, slug, description, body, tag_list, favorited, favorites_count}  = bodyData

    try {
      const newArticle = await Articles.create({
          title,
          slug,
          description,
          body,
          tag_list,
          favorited,
          favorites_count,
          user_id
      });
      return res.status(200).json(newArticle);
    } catch (error) {
    
      return res.status(404).json(error);
    }
  },
};
