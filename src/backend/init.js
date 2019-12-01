const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWRD,
    port: process.env.DB_PORT,
});

async function init() {
    await resetTables();
    await createTables();
}

async function resetTables() {
    try {
        await pool.query(`DROP SCHEMA public CASCADE`);
        await pool.query(`CREATE SCHEMA public`);
    } catch (error) {
        console.log(error);
    }
}

async function createTables() {
    try {
        await pool.query(`CREATE TABLE users (
        username VARCHAR(50) PRIMARY KEY,
        password VARCHAR(50) NOT NULL,
        address VARCHAR(50) NOT NULL,
        driver VARCHAR(50),
        seats INTEGER,
        FOREIGN KEY (driver) REFERENCES users
        )`);
        await pool.query(`CREATE TABLE sections (
        sid VARCHAR(50) PRIMARY KEY,
        days VARCHAR(50),
        fromtime TIME,
        totime TIME
        )`);
        await pool.query(`CREATE TABLE attend (
        username VARCHAR(50),
        sid VARCHAR(50),
        PRIMARY KEY (username, sid),
        FOREIGN KEY (username) REFERENCES users,
        FOREIGN KEY (sid) REFERENCES sections
        )`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    init
};