const {Pool} = require('pg');
require('dotenv').config();
const fetch = require('node-fetch');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWRD,
    port: process.env.DB_PORT,
});

const test = async() => {
};

test();

// const getData = async() => {
//     const res = await fetch("https://ubc-courses-api.herokuapp.com/2018W/CPSC/310/101");
//     const data = await res.json();
//     return data;
// };
//
// getData().then(result => {
//     console.log(result);
// });


function getUser (request, response) {

}

async function createUser (request, response) {
    const username = request.body.username;
    const password = request.body.password;
    const address = request.body.address;
    const sections = request.body.sections;
    const driver = request.body.driver;
    const seats = request.body.seats;

};

function confirmUser (request, response) {

}

function getNearDriver (request, response) {

}

function getDriver (request, response) {

}

function linkSeat (request, response) {

}

function unlinkSeat (request, response) {

}

function getTable (request, response) {
    const tableName = request.params.tableName;
    return pool.query(`SELECT * FROM ${tableName}`)
        .then(result => {
            const capitalizedTableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);
            // if (result.rows.length === 0) {
            //     return Promise.reject(`${capitalizedTableName} Table Not Found`);
            // }
            return response.json({
                // data = tuple
                data: result.rows
            });
        })
        .catch(error => {
            return response.status(404).send({
                error: error,
                message: `Problem Getting ${tableName} Record`
            });
        });
}

module.exports = {
    createUser,
    getUser,
    confirmUser,
    getNearDriver,
    getDriver,
    linkSeat,
    unlinkSeat,
    getTable
};

