let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let fs = require("fs")
const PORT = 3000

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(PORT, () => {
    console.log('server running under port num ' + PORT)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


let mongoose = require('mongoose')
let config = require('./db')
mongoose.connect(config.DB).then(
    () => { console.log('db is connected') },
    err => { console.log('cannot connect to db') }
)

let companies = require('./models/companies.js')
let router = require('./routes/router')(app, fs)