/* *********
Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid 
transaction support, relations, eager and lazy loading, read replication and more.
 
Official Docs for Sequelize :- https://sequelize.org/master/

This file holds the basic database configuration(database usd mysql2)
 */

module.exports = {

    HOST: process.env.HOST,
    
    USER: process.env.USER,
    
    PASSWORD: process.env.PASSWORD,
    
    DB: process.env.DB,
    
    dialect: "mysql",
    
    pool: {
    
    max: 5,
    
    min: 0,
    
    acquire: 30000,
    
    idle: 10000
    
    }
    
    };


    //Basic