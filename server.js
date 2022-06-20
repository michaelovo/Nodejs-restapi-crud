const express = require("express");

//cors provides Express middleware to enable CORS with various options.
const cors = require("cors");

// create express app
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Define simple route the web browser
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Michael Node CRUD application." });
});

// invoke the application routes for the specified directory
require("./app/routes/tutorial.routes.js")(app);

// set port server port
const PORT = process.env.PORT || 8080;

//listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});