const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// const dotenv = require("dotenv");
// dotenv.config();

var corsOptions = {
  origin: "http://localhost:8083"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
//db.sequelize.sync({ force: true }).then(() => {
 // console.log("Drop and re-sync db.");
  //});
 
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CRUD application." });
});

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

