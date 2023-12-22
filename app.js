const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    const lista = {
        id:"1234",
        isCompleted:false,
        description:"walk the dog",
    };
    res.send(lista);
});

app.listen(4000, ()=>{
    console.log("servidor corriendo", 4000);
});



