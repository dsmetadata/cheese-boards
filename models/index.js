const Board = require('./board.model')
const Cheese = require('./cheese.model')
const User = require('./user.model')


/************************* one-to-one ******************************/


/************************* one-to-many ******************************/
User.hasMany(Board)
Board.belongsTo(User)

/************************* many-to-many ******************************/
//new table necessary
Board.belongsToMany(Cheese, {through: 'Board_Cheese'})
Cheese.belongsToMany(Board, {through: 'Board_Cheese'})



//export all models
module.exports = {
    Board,
    Cheese,
    User
}