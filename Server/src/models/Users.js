const {DataTypes} = require('sequelize')
const sequelize = require('../db/db.js')

const Users = sequelize.define('userData',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
})

module.exports = Users
