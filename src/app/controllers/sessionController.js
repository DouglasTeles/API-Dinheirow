const User = require('../models/User')
const bcrypt = require('../helpers/bcrypt/index')

module.exports ={

    async create(req, res){

        const bodyData = req.body
        const {email, password} = bodyData
        
        //verifica se o email existe
        try {

            const hasUser = await User.findOne({ where: { email: email } })

            if (!hasUser) return res.status(404).json({message:"User not found"})

            const passwordDTO = {
                requestPass:password,
                responsePass:hasUser.password
                
            }
            
            const validPassword = await bcrypt.decryptPassword(passwordDTO)


            if(!validPassword) return res.status(400).json({message:"Invalid password"})

            return res.status(200).json({message:"Logged in"})

        } catch (error) {
            return res.status(400).json(error)
        }

        //verifica se a senha esta correta

        


        //gerar token


    }

}