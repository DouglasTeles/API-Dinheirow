const User = require("../models/User");
const Articles = require("../models/Articles");
const Comments = require("../models/Comments");

module.exports = {
  
  async store(req, res) {
    //user logado
     const token = req.user;
     const { payload } = token;
     const userComment = payload.id;

    const {slug} = req.params
    const bodyData = req.body;
    const {comment} = bodyData;  
    
    try {
      const articles = await Articles.findOne({ where: { slug: slug } });
      if (!articles) {
        return res.status(404).json({ message: "Article not Found" });
      }
      const newComment = await Comments.create({
        comment:comment,
        user_id: userComment,
        article_id:articles.id
      });
      return res.status(200).json({Comment:newComment.comment})

    } catch (error) {
      return res.status(400).json(error)
    }
  },

  async index(req, res) { 
    const {slug} = req.params

    try {
      //verica se existe o slug
      const articles = await Articles.findOne({ where: { slug: slug } });
      if (!articles) {
        return res.status(404).json({ message: "Article not Found" });
      }

      //busca os comentarios do artigo
      const commentsAticles = await Comments.findAll({ where: { article_id: articles.id}
      })
      return res.status(200).json(commentsAticles);

    } catch (error) {
      return res.status(400).json(error)
    }

   },
   async delete(req, res) { 

    const {slug, id} = req.params
    
    try {
      //verica se existe o slug
    const articles = await Articles.findOne({ where: { slug: slug } });
    if (!articles) {
      return res.status(404).json({ message: "Article not Found" });
    }

    //verica se existe o comentário 
  const hasComment = await Comments.findOne({ where: { id: id } })
    if(!hasComment) {
      return res.status(404).json({ message: "Id comment invald" });
    }

    //deleta o comentário
    const deleteComment = await Comments.destroy({ where: { id: id } })
    return res.status(200).json({ message: "Comment deleted", hasComment });

    } catch (error) {
      return res.status(400).json(error);
    }
    }

}