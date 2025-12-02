const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.get("/", (req, res)=> {
    res.send("Root");

});

app.get("/search",(req,res) =>{
    console.log(req.query);
    res.send("no results");
});