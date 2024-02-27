const putUser =  async (req, res) => {
    try {
        const {id} = req.params
        const {username, role} = req.body
        
        const user = await Users.findByPk(id)
        
        user.username = username
        user.role = role

        await user.save()

        res.json(user)
    } catch (error) {
        return res.status(500).json({ message:error.message})
    }
}

module.exports = putUser