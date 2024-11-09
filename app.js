const express = require("express");
const app = express();
const port = 3000;
const connect = require("./config/connect")
const route = require("./routes/blog.routes");
const model = require("./models/blog");
const { Show } = require("./controllers/blog");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connect();
app.use("/api",route);

app.get("/",Show)


app.listen(port);