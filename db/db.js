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


// db.sync()
//     .then(() => {
//         return Scooter.create({charge:0, stationId: 13})
//     })
//     .then(scooter => {
//         console.log(scooter)
//     })
//     .catch(console.error)