const express = require('express');
const PORT = 8000;
const app = express();

const db = require('./config/mongoose');

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './view');

app.use('/', require('./routes/index'));

app.listen(PORT, (error) => {
    if(error) {
        console.log("error while running the server");
    }
    console.log("Server is up and running");
})


