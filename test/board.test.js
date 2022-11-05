const { Sequelize } = require('sequelize')
const { Board, Cheese, User } = require('../models')



    describe('The Board Model', () => {

        test('Board Model', () => {
            async function getData(){return await Board.findByPk(1)}
            
            return getData().then(data => {             
              expect(data.dataValues.type).toBe("Nordic Natural Wood");
              expect(data.dataValues.description).toBe("Long Board with Handle, L515 x W125 x H25mm, 832.5g");
              expect(data.dataValues.rating).toBe(5);
              expect(data.dataValues.id).toBe(1);          
          
            });
           
        });
        test('board has correct properties of the correct data type', () => {
            async function getData(){return await Board.findByPk(1)}
            
            return getData().then(data => {          
              expect(data.dataValues.hasOwnProperty("type")).toBe(true);
              expect(data.dataValues.hasOwnProperty("description")).toBe(true);
              expect(data.dataValues.hasOwnProperty("rating")).toBe(true);

              expect(typeof(data.dataValues.type)).toBe('string');
              expect(typeof(data.dataValues.description)).toBe('string');
              expect(typeof(data.dataValues.rating)).toBe('number');
            });
        });


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
              
            });
           
        });

       
        test('Board - Cheese relationship, many to many relationship, eager loading test', () => {
             let board3Cheeses
             let board4Cheeses
             let cheese6Boards
             let cheese7Boards
    
             let totalCheeseOnBoard
             let cheeseID = []
    
            async function getData(){         
                let board3 = await Board.findByPk(3)
                let board4 = await Board.findByPk(4)
                let cheese5 = await Cheese.findByPk(5)
                let cheese6 = await Cheese.findByPk(6)
                let cheese7 = await Cheese.findByPk(7)
              
                //*****A Board can have many Cheeses, and a Cheese can be on many Boards*****
              
                //Link different types of Cheese to a Board
                  board3.addCheese(cheese5)
                  board3.addCheese(cheese6)
                  board3.addCheese(cheese7)          
              
                //Link same types of Cheese to another Board
                  cheese5.addBoard(board4)
                  cheese6.addBoard(board4)
                  cheese7.addBoard(board4)          
                
                  board3Cheeses = await board3.getCheeses() //get all cheeses on board 3
                  board4Cheeses = await board4.getCheeses() //get all cheese on board 4
                  cheese6Boards = await cheese6.getBoards() //get all boards with cheese 6
                  cheese7Boards = await cheese7.getBoards() //get all boards with cheese7
              
                //(eager loading - a board can be loaded with its cheeses (join))
                  let data = await Board.findAll({where:{id:4}, include:{model:Cheese}})
                  //find board where id is 4 and include associated cheeses from the junction table Board_Cheese
              
                  expect(data.length).toEqual(1) //only 1 board should have 4 as their id since id is the primary key
                
                  board4JoinCheeses = data[0] //assign board with joined cheese data to a variable
                  let cheeses = board4JoinCheeses.dataValues.Cheeses
                  totalCheeseOnBoard = cheeses.length
                  cheeseID = [] 
                  for(i=0; i<totalCheeseOnBoard; i++){cheeseID.push(cheeses[i].id)} //get cheese id of all cheeses on board 4
                   
              return [data, board3Cheeses, board4Cheeses, cheese6Boards, cheese7Boards]  //ensures wait till promise is resolved?
            }       
            
            return getData().then(data => {
                  expect(board3Cheeses.length).toBeGreaterThan(1);   //Q.E.D a board can have multiple cheeses              
                  expect(cheese7Boards.length).toBeGreaterThan(1);   //Q.E.D a cheese can be on multiple boards              
                  expect(board4Cheeses.length).toEqual(3);   //Q.E.D a board can have multiple cheeses              
                  expect(cheese6Boards.length).toEqual(2);   //Q.E.D a cheese can be on multiple boards   
                  
                //Q.E.D (eager loading - a board can be loaded with its cheeses (join))
                   expect(totalCheeseOnBoard).toEqual(3)    
                   expect(cheeseID.includes(5)).toBe(true) 
                   expect(cheeseID.includes(6)).toBe(true)
                   expect(cheeseID.includes(7)).toBe(true)          
            });
           
        });    

        
    })


