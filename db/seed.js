const { Board, Cheese, User } = require('../models') //will default to index file
const db = require('./db')

//Create
async function seed () {
    // Drop and Create all tables in the db
    await db.sync({ force: true }) 
    // await Board.sync({ force: true }) 
    // await Cheese.sync({ force: true }) 
    // await User.sync({ force: true }) 

    //Approach 1
    // const b1 = Board.build({
    //     type: "Rom Holland",
    //     description: "Story",
    //     rating: "Story"
    // })

    // await a1.save()

    //Approach 2
    // const b1 = await Board.create({
    //     type: "Rom Holland",
    //     description: "Story",
    //     rating: "Story"
    // })

    // console.log(b1.toJSON())

    //Approach 3
    await Board.bulkCreate([
        {
            type:'Nordic Natural Wood',
            description:'Long Board with Handle, L515 x W125 x H25mm, 832.5g',
            rating:5
        },
        {
            type:'Olympia Oak Wood ',
            description:'Medium Paddle Board, 15(H) x 115(W) x 400(D)mm, 1.26kg',
            rating:7
        },
        {
            type:'Churchill Alchemy Wood',
            description:'Large Serving Board, 410 x 165mm, 832.5g',
            rating:9
        },
        {
            type:'Acacia Wood',
            description:'Wide Siena Board, L430 x W250 x H15mm',
            rating:5
        },
        {   
            type:'Oiled Oak',
            description:'Cream & Country Long Farmhouse Serving Board, 616 x 150 x 15mm',
            rating:5
        }       
    ], {validate: true})

    await Cheese.bulkCreate([
        {
            title:'French Camembert',
            description:`A moist, soft, creamy, surface-ripened cow's milk cheese.
            https://en.wikipedia.org/wiki/Camembert`
        },
        {
            title:'Stilton',
            description:`An English cheese, produced in two varieties:
            1.Blue, which has Penicillium roqueforti added to generate a characteristic smell and taste
            2.White, which does not.
           https://en.wikipedia.org/wiki/Stilton_cheese`
           
        },
        {
            title:'Brie',
            description:`A soft cow's-milk cheese named after Brie, the French region from which it originated.
            It is pale in color with a slight grayish tinge under a rind of white mould.
            It is similar to Camembert,containing between 60% and 75% butterfat, slightly higher than Camembert.
            https://en.wikipedia.org/wiki/Brie`
        },
        {
            title:'Cheddar',
            description:`A natural cheese that is relatively hard, off-white (or orange if colourings such as annatto are added)
            and sometimes sharp-tasting. Cheddar originates from the English village of Cheddar in Somerset.
            https://en.wikipedia.org/wiki/Cheddar_cheese
            `
        },
        {   title:'Gouda',
            description:`A sweet, creamy, yellow cow's milk cheese originating from the Netherlands.It is one of the most popular
            cheeses worldwide. The name is used today as a general term for numerous similar cheeses produced in 
            the traditional Dutch manner.
            https://en.wikipedia.org/wiki/Gouda_cheese`
        },        
        {
            title:'Red Leicester',
            description:`Red Leicester (also known simply as Leicester or Leicestershire cheese) is an English cheese,
            made in a similar manner to Cheddar cheese, although it is crumbly in texture and typically sold at 
            6 to 12 months of age. The rind is reddish-orange with a powdery mould on it.
            
            Since the 18th century, it has been coloured orange by the addition of annatto extract during manufacture.
            It is a cow's milk cheese, and is named after the city of Leicester, or the ceremonial county it is located in,
            Leicestershire.
            https://en.wikipedia.org/wiki/Red_Leicester`
        },
        {
            title:'Buffalo Mozzarella',
            description:`A mozzarella made from the milk of Italian Mediterranean buffalo. 
            It is a dairy product traditionally manufactured in Campania, especially in the provinces of Caserta and Salerno.
            
            The term mozzarella derives from the procedure called mozzare which means "cutting by hand", 
            separating from the curd, and serving in individual pieces. It is appreciated for its versatility
            and elastic texture and often called "the queen of the Mediterranean cuisine", "white gold" or "the pearl of the table".
            
            https://en.wikipedia.org/wiki/Buffalo_mozzarella`
        }     
    ], {validate: true})

    await User.bulkCreate([
        {
            name:'Pam Beasley',
            email:'pam.beasley@dundermifflin.com'
        },
        {
            name:'Oscar Martinez',
            email:'oscar.martinez@dundermifflin.com'
        },
        {   name:'Toby Flenderson',
            email:'toby.flenderson@dundermifflin.com'
        },
        {   
            name:'Dwight Schrute',
            email:'assitant.regionalmanager@dundermifflin.com'
        }
    ], {validate: true})
}

seed ()
//instead of running this file from the terminal each time we need to seed
//we can add a script into package.json
//npm run 'script name' to run script i.e. npm run seed


/*



User no foreign key
Board - UserId
Cheese no foreign key

Board_Cheese BoardId CheeseId






Cheese

French Camembert
A moist, soft, creamy, surface-ripened cow's milk cheese.
https://en.wikipedia.org/wiki/Camembert


Stilton
An English cheese, produced in two varieties:
 1.Blue, which has Penicillium roqueforti added to generate a characteristic smell and taste
 2.White, which does not.
https://en.wikipedia.org/wiki/Stilton_cheese

Brie
A soft cow's-milk cheese named after Brie, the French region from which it originated.
It is pale in color with a slight grayish tinge under a rind of white mould.
It is similar to Camembert,containing between 60% and 75% butterfat, slightly higher than Camembert.
https://en.wikipedia.org/wiki/Brie

Cheddar
A natural cheese that is relatively hard, off-white (or orange if colourings such as annatto are added)
and sometimes sharp-tasting. Cheddar originates from the English village of Cheddar in Somerset.
https://en.wikipedia.org/wiki/Cheddar_cheese

Gouda
A sweet, creamy, yellow cow's milk cheese originating from the Netherlands.It is one of the most popular
cheeses worldwide. The name is used today as a general term for numerous similar cheeses produced in 
the traditional Dutch manner.
https://en.wikipedia.org/wiki/Gouda_cheese


Red Leicester
Red Leicester (also known simply as Leicester or Leicestershire cheese) is an English cheese,
made in a similar manner to Cheddar cheese, although it is crumbly in texture and typically sold at 
6 to 12 months of age. The rind is reddish-orange with a powdery mould on it.

Since the 18th century, it has been coloured orange by the addition of annatto extract during manufacture.
It is a cow's milk cheese, and is named after the city of Leicester, or the ceremonial county it is located in,
Leicestershire.
https://en.wikipedia.org/wiki/Red_Leicester


Buffalo Mozzarella
A mozzarella made from the milk of Italian Mediterranean buffalo. 
It is a dairy product traditionally manufactured in Campania, especially in the provinces of Caserta and Salerno.

The term mozzarella derives from the procedure called mozzare which means "cutting by hand", 
separating from the curd, and serving in individual pieces. It is appreciated for its versatility
and elastic texture and often called "the queen of the Mediterranean cuisine", "white gold" or "the pearl of the table".

https://en.wikipedia.org/wiki/Buffalo_mozzarella






*/