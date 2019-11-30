const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWRD,
    port: process.env.DB_PORT,
});

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
    getTable
};

