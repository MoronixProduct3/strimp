const express = require("express")
const StrimpData = require("./strimp_data")

const WEB_PORT = 8000;
const WS_PORT = 9000;


// Start Data transport
const strimpData = new StrimpData(WS_PORT)

// Start web server
const app = express();
app.use(express.static('dist'))
app.listen(WEB_PORT, () => { console.log(`listening on ${WEB_PORT}`)})