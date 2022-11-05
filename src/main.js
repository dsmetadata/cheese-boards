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



    //Relationships: Link data in multiple tables

        //Link a User to a Board
            await board1.setUser(user4)
            await board2.setUser(user4)
            //console.table(user4.toJSON())    //get user4    
            //console.table(board1.toJSON()) //get board data
            //console.table((await board1.getUser()).toJSON()) //get the user of board1

        //Link different types of Cheese to a Board
            board1.addCheese(cheese1)
            board1.addCheese(cheese2)
            board1.addCheese(cheese3)
            board1.addCheese(cheese4)
        //Link different types of Cheese to a Board
            cheese1.addBoard(board2)
            cheese2.addBoard(board2)
            cheese3.addBoard(board2)
            cheese4.addBoard(board2)


    //Relationship: Test relationships/foreign keys

        //***A user can be loaded with its boards****
              let user4Boards = await user4.getBoards() //get associated boards
            //  console.log('total boards : '+user4Boards.length)
            //  console.table(user4Boards[0].toJSON()) //expose properties and values of first board object
            //  console.log(user4Boards[0].id)  //get id of first board object    

        //****A board can be loaded with its cheeses*****           
             let board1Cheeses = await board1.getCheeses() //get associated cheeses
            // console.log('types of cheese : '+board1Cheeses.length)
            // console.table(board1Cheeses[0].toJSON()) //expose properties and values of first cheese object
            // console.log(board1Cheeses[0].id)  //get id of first cheese object    

        //a cheese can be loaded with it's board data
             let cheese2Boards = await cheese2.getBoards() //get associated boards
            // console.log('total boards :'+cheese2Boards.length)
            // console.table(cheese2Boards[0].toJSON()) //expose properties and values of first board object
            // console.log(cheese2Boards[0].id)  //get id of first board object              



    //Eager Loading: A board can be loaded with it's cheeses  (Many To Many)
        //return an array of all boards where board id is 1 or 2
        //include any associations with Cheese i.e. details from the junction table Board_Cheese
        //when getting Cheeses associated with these boards return only the cheese id ---works when using JSON.Stringify() otherwise returns an array of cheese objects    

        let data = await Board.findAll({attributes:['id', 'type'], where:{id:{[Op.or]:[1, 2]}},include: {model: Cheese, attributes:['id']}})    
        //returns an array with 2 board objects

        //display board object without sequelize metadata (show me the keys and values)    
        console.table(data[0].dataValues)
        console.table(data[0].toJSON()) 
        //console.log(JSON.stringify(data[0]))

        //exposing the target object &/or junction table
        console.table(data[0].dataValues.Cheeses[0].dataValues)
        console.table(data[0].Cheeses[0].toJSON()) 
        console.log(JSON.stringify(data[0].Cheeses[0]))

        //target object has multiple fields
        let data2 = await Board.findAll({attributes:['id', 'type'], where:{id:{[Op.or]:[1, 2]}},include: {model: Cheese, attributes:['id','title']}})   
        console.table(data2[0].dataValues.Cheeses[0].dataValues)
        console.table(data2[0].Cheeses[0].toJSON()) 
        console.log(JSON.stringify(data2[0].Cheeses[0]))

        //eager loading 
        //https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/



    // Misc: Inspecting nested objects

    /*checking object properties
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn
    */

    //checking properties of nested objects
    //checking properties of sequelize objects

        //Inspect array of objects
        // let result = await board2.getCheeses() //return an array of cheese objects
        // let targetObject

        //console.log(result[0].dataValues) // display first object (keys and values) without sequelize data

        // targetObject = result.filter(itm=>itm.title==='Stilton') //select object by property, returns array with target object
        //console.log(targetObject)

        // targetObject = result.find(element=>element.dataValues.title.includes('Stilton')) //returns cheese object with sequelize data
        //console.log(targetObject)

        // targetObject = await board2.getCheeses({attributes:['title'], where:{id:2}}) //select using sequelize, returns array with target object
        //console.log(targetObject)



        //console.log(data[0].dataValues.Cheeses[3].dataValues)  //inspect the 3rd cheese linked to the first board

        //console.log(data) //display array of sequelize board objects
        //console.log(data[0]) //display first element (first board object)

        //for(itm in data[0]){console.log(itm)} //iterate over & display each key in the board object, includes sequelize data
        //console.table(Object.keys(data[0])) //return object keys in an array

        //for(itm of data[0]){console.log(itm)} //display each value in the board object, fails with - oject is not iterable
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

        // let objValues = Object.values(data[0]) //returns an array with the values in the board object (values include nested objects)
        //console.log(objValues)
        //objValues.forEach(p=>console.log(p)) //expose object values

        // let objEntries = Object.entries(data[0]) //returns an array with a list of nested arrays each of which holds 1 object property (key-value pair)   
        //objEntries.forEach(p=>console.log(p)) //expose key-value pairs in each nested array




}

main()