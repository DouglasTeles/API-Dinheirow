const User = require("../models/User");
const Articles = require("../models/Articles");
const Follows = require("../models/Follows");

module.exports = {
  async store(req, res) {
    //dados de quem esta logado
    const token = req.user;
    const { payload } = token;
    const user_id = payload.id;


    //busca os dados do autor
    const dataUser = await User.findByPk(user_id);
    const dataAuthor = {
      Author: dataUser.username,
      Bio: dataUser.bio,
      Imagem: dataUser.image,
    };

    //recebe os dados do artigo
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


    //Cria o artigo
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
    const { author } = req.query;
    
    try {
      if (!author) {//Se o query estiver vazio retorna todos os artigos
        const articles = await Articles.findAll({
          order: [["created_at", "DESC"]],
        });
        return res.status(200).json(articles);

        
      } else {
        const user = await User.findOne({ where: { username: author } });//busca o autor
        
        //busca o artigo 
        const articles = await Articles.findAll({
          where: { user_id: user.id },
        });
        return res.status(200).json(articles);
      }

    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: "User not found" });
    }
  },

  async indexslug(req, res) {
    const { slug } = req.params;
    
    try {
      if (!slug || slug == undefined || slug == null) {
        return res.status(404).json({ message: "Invalid slug" });
      
      } else {
        const articles = await Articles.findOne({ where: { slug: slug } });
        if (!articles) {
          return res.status(404).json({ message: "Article not Found" });
        }
        return res.status(200).json(articles);
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async indexfeed(req, res) {
    
    //dados de quem esta logado
    const token = req.user;
    const { payload } = token;
    const user_id = payload.id;
    console.log(user_id)

    const follows = await Follows.findAll({where:{ follower_id:user_id  }})
    const dataFollows = follows
    
    
    if(follows){
      const articles = await Articles.findAll({ where: {user_id:user_id},
        order: [["created_at", "DESC"]],
      });
      return res.status(200).json(articles);
    }else{
      return res.status(200).json({ message:"vc não segue ninguem"});
    }


    
  }

};
