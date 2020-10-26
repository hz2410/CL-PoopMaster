let express = require("express");
let app = express();
let bodyParser = require('body-parser');

//Database initialization
let DataStore = require('nedb');
let db = new DataStore('poopHistory.db');
db.loadDatabase();

//Express Middleware
app.use('/', express.static('public'));
app.use(bodyParser.json());

app.post('/poopData', (req, res) => {
    console.log("Received a POST request!");

    let poopObj = req.body;
    console.log(poopObj);
    db.insert(poopObj);

    //Send msg back to the client
    let responseObj = { "msg": "success" };
    res.json(responseObj);
});

app.listen(8888, () => {
    console.log("listening at localhost:8888");
})