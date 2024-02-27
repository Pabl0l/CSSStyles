const Users= require('../models/Users.js')
const getUserById = async (req, res) => {
    try {
        const {id} = req.params
        
        const user = await Users.findOne({
            where:{
                id
            }
        })
        
        if (!user) res.status(404).json({ message:'no existe este user!'})

        res.json(user)
   } catch (error) {
       return res.status(500).json({ message:error.message})
   }
}

module.exports = getUserById

