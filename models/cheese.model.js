const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../db/db')

//Design

class Cheese extends Model { }

//config
Cheese.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING    

}, {sequelize: db})

module.exports = Cheese