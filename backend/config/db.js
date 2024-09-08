require('dotenv').config({path:'../.env'});
const mysql = require('mysql2');
console.log(process.env.DB_USERNAME);
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Your query and connection logic here

connection.end((err) => {
    if (err) {
        console.error('Error ending the connection:', err);
        return;
    }
    console.log('Connection ended');
});
