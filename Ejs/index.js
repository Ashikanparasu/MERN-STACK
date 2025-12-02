const express = require("express");

const app = express();



let port = 8080;

app.set("view engine","ejs");

app.get("/",(req,res) => {
    res.render("home.ejs");
});
app.get("/roll",(req,res) => {
    res.render("rolldice.ejs");
});
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});