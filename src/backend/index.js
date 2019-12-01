const express = require('express');
const app = express();
const port = 8080;
const query = require("./query");
const start = require("./init");

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
};

// TODO
try {
    const started = start.init();
} catch (error) {
    console.log(error);
}

app.use(allowCrossDomain);

// test
app.get('/', (request, response) => {
    response.status(200).send('ok');
});

app.get('/user', query.getUser);

app.post('/user', query.createUser);

app.post('/userlogin', query.confirmUser);

app.get('/nearDriver', query.getNearDriver);

app.get('/driver', query.getDriver);

app.post('/link', query.linkSeat);

app.post('unlink', query.unlinkSeat);

app.get('/table/:tableName', query.getTable);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});