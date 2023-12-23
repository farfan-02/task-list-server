const express = require("express");
const app = express();
const routers = require('./list-view-router.js');
const routersEdit = require('./list-edit-router.js');

app.use(routers);
app.use(routersEdit);

app.get("/", (req,res)=>{
    const tarea = [{
        id:"1234",
        isCompleted:false,
        description:"walk the dog",
}];
    res.send(tarea);
});

app.listen(4000, ()=>{
    console.log("servidor corriendo", 4000);
});



