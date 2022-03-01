const express = require("express")
const StrimpData = require("./strimp_data")

const PORT = 8000;


// Start web server
const app = express();
app.use(express.static('dist'))

const server = app.listen(PORT, ()=>{console.log(`listening on ${PORT}`)})

// Start Data transport
const strimpData = new StrimpData(server)