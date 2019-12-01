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
    const s = request.body.sections;
    console.log(s);
    const sections = JSON.parse(request.body.sections);
    const driver = Boolean(request.body.driver);
    let driverID = null;
    if (driver) {
        driverID = username;
    }
    const seats = JSON.parse(request.body.seats);
    console.log(username, password, address, sections, driver, seats);
    try {
        const addUser = await pool.query(`INSERT INTO users VALUES
        ($1, $2, $3, $4, $5)`, [username, password, address, driverID, seats]);
        for (const section of sections) {
            console.log(section);
            const res = await fetch("https://ubc-courses-api.herokuapp.com/" + section.term + "/" +
                section.dept + "/" + section.id + "/" + section.number);
            console.log(res);
            const data = await res.json();
            const sectionExists = await pool.query(`SELECT * FROM sections WHERE sid = $1`, [data._id]);
            if (sectionExists.rows.length === 0) {
                const fromtime = data.start + ":00";
                const totime = data.end + ":00";
                const addSection = await pool.query(`INSERT INTO sections VALUES
                ($1, $2, $3, $4)`, [data._id, data.days, fromtime, totime]);
                console.log("added new section");
            }
            const addAttend = await pool.query(`INSERT INTO attend VALUES
            ($1, $2)`, [username, data._id]);
            console.log("added new attend");
        }
        return response.json({
            data: username
        })
    } catch (error) {
        console.log(error);
    }
}

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

