const deleteUser =async (req, res) => {
    try {
        
        const {id} = req.params
    
        await Users.destroy({
            where:{
                id
            }
        })
    
        res.status(204)
    } catch (error) {
        return res.status(500).json({ message:error.message})
        
    }
    }
module.exports =deleteUser 