const { QueryError } = require('sequelize')
const { Board, Cheese, User } = require('../models')



describe('The User Model', () => {

    test('User Model', () => {
        async function getData(){return await User.findByPk(4)}

        return getData().then(data => {
          expect(data.dataValues.name).toBe("Dwight Schrute");
          expect(data.dataValues.email).toBe("assitant.regionalmanager@dundermifflin.com");
          expect(data.dataValues.id).toBe(4);          
        
        });
    });

    test('user has correct properties of the correct data type', () => {
        async function getData(){return await User.findByPk(2)}

        return getData().then(data => {
          expect(data.dataValues.hasOwnProperty("name")).toBe(true);
          expect(data.dataValues.hasOwnProperty("email")).toBe(true);
        
          expect(typeof(data.dataValues.name)).toBe('string');
          expect(typeof(data.dataValues.email)).toBe('string');
        });
    }) 

    test('Multiple Boards can be added to a User & Board - User relationship', () => {

        async function getData(){
          user4 = await User.findByPk(4) //get user 
          board1 = await Board.findByPk(1)  // get first board 
          board2 = await Board.findByPk(2) // get second board      
          await board1.setUser(user4) //add first board to user4
          await board2.setUser(user4) //add second board to user4

          let user4Boards = await user4.getBoards()        
          return user4Boards  //return array of board objects     
        }       

          return getData().then(data => {
          expect(data.length).toBe(2);   //Q.E.D multiple boards can be added to a User, test Board-User relationship, Eager Loading test              
          expect(board1.UserId).toBe(4);  //Q.E.D Board-User relationship is tested               
          expect(board2.UserId).toBe(4);  //Q.E.D Board-User relationship is tested  
          //(eager loading - a board can be loaded with associated cheeses (join))                   
        });
    });
   
    
})