const mysql = require("mysql"); //import mysql
const dbConfig = require("../config/db.config.js"); //import the configuration file

// Create a connection to the database using "db.config.js" variables
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// open and test the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log(`Successfully connected to the database(${dbConfig.DB}).`);
});
module.exports = connection;