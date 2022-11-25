const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user')
.then(() => {console.log("Connected to mongodb")})
.catch((error) => {console.log("error", error)});