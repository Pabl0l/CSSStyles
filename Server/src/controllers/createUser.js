const  User  = require('../models/Users.js');

// Función para crear un nuevo usuario
const createUser = async ({ name, role, password, imagen }) => {
  try {
    // Verifica si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ where: { name } });

    if (existingUser) {
      // Si el usuario ya existe, puedes lanzar un error o manejarlo según tus necesidades
      throw new Error('El usuario ya existe');
    }

    // Crea un nuevo usuario en la base de datos utilizando el modelo Sequelize
    const newUser = await User.create({
      name,
      role,
      password,
      imagen,
    });

    return newUser;
  } catch (error) {
    // Maneja los errores según tus necesidades
    console.error('Error en createUser:', error);
    throw error; // Puedes lanzar el error para manejarlo en el controlador de la ruta
  }
};

module.exports = {
  createUser,
};
