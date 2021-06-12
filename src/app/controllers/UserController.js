const User = require('../models/User')

module.exports = {

    async store(req, res){
        
        const bodyData = req.body

        try {
            
            const newUser = await User.create(bodyData)
            return res.status(200).json(newUser)

        } catch (error) {
            return res.status(404).json(error)
        }
    },
    async index(req, res){
        
        try {
            const users = await User.findAll()
            return res.status(200).json(users)
            
        } catch (error) {
            return res.status(404).json(err)
            
        }
        
            
    },

    async update(req, res){
        
        const { username, password, email } = req.body;

        const { user_id } = req.params;

         await User.update({
            username, password, email
        }, {
            where: {
                id: user_id
            }
        })
        return res.status(200).send({
            status: 1,
            message: "Usuário atualizado com sucesso!",
            username, password, email
        });

    },
    async delete(req, res){


    },
}