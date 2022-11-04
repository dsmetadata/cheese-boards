const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../db/db')

//Design

class User extends Model { }

//config
User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING    

}, {sequelize: db})

module.exports = User

