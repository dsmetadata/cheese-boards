const { Sequelize } = require('sequelize')
const { Board, Cheese, User } = require('../models')


  describe('The Cheese Model', () => {
  
     
      test('Cheese Model', () => {
          async function getData(){return await Cheese.findByPk(2)}
          
          return getData().then(data => {         
            expect(data.dataValues.title).toBe("Stilton");
            expect(data.dataValues.description.includes(`https://en.wikipedia.org/wiki/Stilton_cheese`)).toBe(true);          
            expect(data.dataValues.id).toBe(2);          
        
          });
         
      });

      test('cheese has correct properties of the correct data type', () => {
          async function getData(){return await Cheese.findByPk(1)}
          
          return getData().then(data => {            
            expect(data.dataValues.hasOwnProperty("title")).toBe(true);
            expect(data.dataValues.hasOwnProperty("description")).toBe(true); 

            expect(typeof(data.dataValues.title)).toBe('string');
            expect(typeof(data.dataValues.description)).toBe('string');
            
          });
      });          
 
      
  })

