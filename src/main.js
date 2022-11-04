const { Board, Cheese, User } = require('../models')
const { Op } = require('sequelize')

async function main () {

    
//https://sequelize.org/docs/v6/core-concepts/model-instances/

    const user4 = await User.findByPk(4) //return a row object from the table User
    const board1 = await Board.findByPk(1)
    const board2 = await Board.findByPk(2)
    const board3 = await Board.findByPk(3)
    const board4 = await Board.findByPk(4)
    const board5 = await Board.findByPk(5)
    const cheese1 = await Cheese.findByPk(1)
    const cheese2 = await Cheese.findByPk(2)
    const cheese3 = await Cheese.findByPk(3)
    const cheese4 = await Cheese.findByPk(4)
    const cheese5 = await Cheese.findByPk(5)
    const cheese6 = await Cheese.findByPk(6)
    

    //Link a User to a Board
        await board1.setUser(user4)
        await board2.setUser(user4)    

        //console.table(user4.toJSON())    //get user4    
        //console.table(board1.toJSON()) //get board data
        //console.table((await board1.getUser()).toJSON()) //get the user of board1

    
    //***A user can be loaded with its boards****
        //  let user4Boards = await user4.getBoards() //get associated boards
        //  console.log('total boards : '+user4Boards.length)
        //  console.table(user4Boards[0].toJSON()) //expose properties and values of first board object
        //  console.log(user4Boards[0].id)  //get id of first board object   

    
    //Link different types of Cheese to a Board
        board1.addCheese(cheese1)
        board1.addCheese(cheese2)
        board1.addCheese(cheese3)
        board1.addCheese(cheese4)

    //****A board can be loaded with its cheeses*****           
        // let board1Cheeses = await board1.getCheeses() //get associated cheeses
        // console.log('types of cheese : '+board1Cheeses.length)
        // console.table(board1Cheeses[0].toJSON()) //expose properties and values of first cheese object
        // console.log(board1Cheeses[0].id)  //get id of first cheese object  

    
    //Link different types of Cheese to a Board
        cheese2.addBoard(board2)
        cheese3.addBoard(board2)
        cheese5.addBoard(board2)
        cheese6.addBoard(board2)
        
    //a cheese can be loaded with it's board data
        // let cheese2Boards = await cheese2.getBoards() //get associated boards
        // console.log('total boards :'+cheese2Boards.length)
        // console.table(cheese2Boards[0].toJSON()) //expose properties and values of first board object
        // console.log(cheese2Boards[0].id)  //get id of first board object              







    //return an array of all boards where board id is 1 or 2
    //include any associations with Cheese i.e. details from the junction table Board_Cheese
    //when getting Cheeses associated with these boards return only the cheese id ---works when using JSON.Stringify() otherwise returns an array of cheese objects    
    
    //let data = await Board.findAll({attributes:['id', 'type'], where:{id:{[Op.or]:[1, 2]}},include: {model: Cheese, attributes:['id']}})    
    

    //console.log(data) //display array of sequelize board objects
    //console.log(data[0]) //display first element (first board object)

    //for(itm in data[0]){console.log(itm)} //display each key in the board object
    //console.log(Object.keys(data[0]))

    //for(itm of data[0]){console.log(itm)} //display each value in the board object, fails with - oject is not iterable
    //let objValues = Object.values(data[0]) //returns an array with the values in the board object (values include nested objects)
    //console.log(objValues)
    //objValues.forEach(p=>console.log(p)) //display each value
    //let objEntries = Object.entries(data[0])
    //objEntries.forEach(p=>console.log(p))
    //console.log(Object.entries(data[0]))
    

    //console.log(data[0].toJSON()) //display board object without sequelize metadata (show me the keys and values)    
    
          
 //eager loading 
    //https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/
    
      




}

main()