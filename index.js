const express = require('express');

const app = express();
const SERVER_PORT = 8081;

app.get("/hello", (req,res) => {
    res.send("Hello Express JS");
})

app.get("/user", (req,res) => {

    const fname = req.query.fname;
    res.send(`Welcome to the user page ${fname}`);

})

app.post("/user/:fname/:lname", (req,res) =>{
    const {fname, lname} = req.params;
    const user = {
        fname, 
        lname
    }
    res.send(user);
})

app.post("/user")

app.listen(SERVER_PORT, () => {
    console.log(`Express is listening to port number: ${SERVER_PORT}`)
})