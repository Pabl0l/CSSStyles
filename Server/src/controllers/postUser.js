const Users= require('../models/Users.js')
const tomarUltImg = require('./tomarUltImg.js')
const path = require('path')

const postUser= async (req, res) => {

 
  const imageURL = `${path.join('/uploads',tomarUltImg())}`

  try {
      const { username, role, password } = req.body;

      const newUser = await Users.create({
        username,
        role,
        password,
        imagen:imageURL,
      });
  
      console.log("postUser: ", newUser.dataValues);
      res.send('Creating new user');
    } catch (error) {
      console.log("Error creating user")
      return res.status(500).json({ message: error.message });
    }
  }

  module.exports =  postUser