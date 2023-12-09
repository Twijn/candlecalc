const express = require("express");
const path = require("path");
const app = express();

const config = require("../config.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("express/static"));

const controllers = require("./controllers/");
app.use("/", controllers);

app.listen(config.express.port, () => {
    console.log(`Express is listening to port ${config.express.port}`);
});
