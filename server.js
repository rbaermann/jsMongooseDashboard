const express = require("express");
const app = express();
const session = require("express-session");
const port = 8000;

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended : true }));
app.use(session({
    secret : "Garchomp",
    resave : false,
    saveUninitialized : true,
    cookie : { maxAge : 60000 }
}));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

require("./routes")(app);

app.listen(port, (err) => {
    console.log(`Listening to port ${port}.`)
});