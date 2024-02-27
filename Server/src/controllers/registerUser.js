const { createUser } = require('./createUser.js'); 
const registerUser=async (req, res) => {
    try {
      const { name, role, password } = req.body;
      const image = req.file ? req.file.filename : null; 
      const newUser = await createUser({ name, role, password, image });
  
      res.status(201).json({ success: true, user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }

  module.exports = registerUser