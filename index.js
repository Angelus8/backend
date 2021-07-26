const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//init our app
const app = express();

//Configure and connecting database
const dbConfig = require('./config/keys');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("MongoDB connected successfuly");
}).catch((err) =>{
    console.log(`Erreur de connection : ${err}`);
    process.exit();
})

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//configure and define route
const routeContact = require('./routes/contacts');
app.use('/', routeContact);
//define port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});