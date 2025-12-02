const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.get("/", (req, res)=> {
    res.send("Root");

});

app.get("/hi", (req, res)=> {
    res.send("Hi Da !");

});

app.get("*", (req, res)=> {
    res.send("Hi Da !");

});
