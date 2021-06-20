const User = require("../models/User");
const Follows = require("../models/Follows");

module.exports = {
  async store(req, res) {
    const { payload } = req.user;
    const { username } = req.params;

    try {
      //Busca o ID do usuario passado por parametro
      const user = await User.findOne({ where: { username: username } }) 
      if (!user) {
        return res.status(200).json({ message: "User not found" })
      }

      //Busca na tabela de Follows se existe algum usuario seguindo o ID passado por parametro
      const follow = await Follows.findOne({
        where: { follower_id: payload.id, follow_id: user.id },
      })

      //Verifica se usuario esta tentando seguir ele mesmo
      if (user.id == payload.id) {
        return res.status(200).json({ message: "Impossible follow this user" })
      }

      //Verifica se o ID do parametro já estiver sendo seguido pelo usuario
      if (follow) {
        return res
          .status(200)
          .json({ message: "You already follow this user" })
      }

      //Se não cria o follow
      const newfollow = await Follows.create({
        follow_id: user.id,
        follower_id: payload.id,
      })
      return res.status(200).json({ message: "Following", user })

    } catch (error) {
      return res.status(400).json(error)
    }
  },
};
