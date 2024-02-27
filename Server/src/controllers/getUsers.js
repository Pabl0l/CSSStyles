const Users= require('../models/Users.js')
const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll()
        // console.log( 'Aquí los users:' , users)
        res.json(users)
    } catch (error) {
        return res.status(500).json({ message:error.message})
    }
    }

    module.exports = getUsers