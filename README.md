# cheese-boards
A Sequelize DB for users to collect cheeses and place them on boards

#Files
Database config: db.js
Database load: seed.js

Database schema: board.model.js, cheese.model.js, user.model.js, Database export: index.js

Database queries: main.js


#221105_151700 Update
-Added tests [board.test.js, cheese.test.js, user.test.js]
-Code hygiene, indentation, removed superfluous code and comments [main.js, db.js, seed.js, package.json, README.md]
-board.test.js
    amendment in line 103 of test 'Board - Cheese relationship, many to many relationship, eager loading test'
    changed the return value of the async function getData() from one object to an array of several objects to ensure
    all promises are fulfilled and objects contain the data intended before performing tests.
 
 