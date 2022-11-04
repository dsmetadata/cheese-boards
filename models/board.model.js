const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../db/db')

//Design

class Board extends Model { }

//config
Board.init({
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.NUMBER

}, {sequelize: db})

module.exports = Board