const { Sequelize } = require('sequelize')
const path = require('path')

//const db = new Sequelize('sqlite::memory')  //in memory doesn't save a file

const db = new Sequelize({
    dialect: 'sqlite', //other dialects MySQL, PostgreSQL
    //storage: './db.sqlite,
    storage: path.join(__dirname, 'db.sqlite'),
    logging: false
})

module.exports = db

