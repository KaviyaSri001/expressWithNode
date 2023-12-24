const express = require("express");

const app = express();

app.use(express.json());

const port = 8081;

const toDoList = ["Hey everyone","Hope yu all","are doing ","awesome at your work"];

app.get("/todos", (req, res)=>{
    res.status(200).send(toDoList)
})
app.listen(port, ()=>{
    console.log("NodeJs with Express started running on the port ${port}")
})