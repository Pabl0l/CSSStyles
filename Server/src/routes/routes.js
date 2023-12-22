const {Router} = require('express')
const Users= require('../models/Users.js')

const router = Router()

router.get('/users', async (req, res) => {
try {
    const users = await Users.findAll()
    console.log( 'Aquí los users:' , users)
    res.json(users)
} catch (error) {
    return res.status(500).json({ message:error.message})
}
})

router.get('/users/:id',  async (req, res) => {
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
})

router.post('/users', async (req, res) => {
    try {
      const { username, role, password } = req.body;

  
      const newUser = await Users.create({
        username,
        role,
        password,
      });
  
      console.log(newUser);
      res.send('Creating new user');
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
  

router.put('/users/:id', async (req, res) => {
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
})

router.delete('/users/:id', async (req, res) => {
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
})

module.exports = router