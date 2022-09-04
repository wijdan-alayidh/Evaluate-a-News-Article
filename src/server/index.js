// dotevn backage to use variables in .env file
const dotenv = require("dotenv");
// config to use variables in .env file
dotenv.config();

var path = require("path");
// Express server
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const fetch = require("node-fetch");
/* Dependencies */
const bodyParser = require("body-parser");
const cors = require("cors");
const { request, response } = require("express");

const app = express();

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));
console.log(__dirname);

const port = 8081;
const server = app.listen(port, listening);

// API info
const API = {
  URL: process.env.API_URL,
  KEY: process.env.API_KEY,
  LANG: "en",
};

// Callback to debug
function listening() {
  console.log(`Server running successfully at port: ${port}`);
}

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/analysis", async function (req, res) {
  let receivedUrl = req.body.url;
  let fullUrl = `${API.URL}?key=${API.KEY}&&url=${receivedUrl}&&lang=${API.LANG}`;
  console.log(fullUrl);
  try {
    const response = await fetch(fullUrl);
    const receivedData = await response.json();
    console.log(receivedData);
    res.send(receivedData);
  } catch (error) {
    console.log(error);
  }
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
