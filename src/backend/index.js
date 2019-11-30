const express = require('express');
const app = express();
const port = 8080;
const query = require("./query");

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
};

app.use(allowCrossDomain);

app.get('/', (request, response) => {
    response.status(200).send('ok');
});

app.get('/table/:tableName', query.getTable);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});