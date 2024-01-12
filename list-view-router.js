const express = require("express");

const router = express.Router();

const tareas = [{
    id:"Juan",
    completada:false,
    descripcion:"Lavar el carro",
},
{
    id:"Santiago",
    completada:true,
    descripcion:"Sacar al perro",
}];

router.get("/completed", (req,res)=>{
    const tareasCompletas = tareas.filter(tareas => tareas.completada);
    res.send(tareasCompletas);
});

router.get("/incomplete", (req,res)=>{
    const tareasIncompletas = tareas.filter(tareas => !tareas.completada);
    res.send(tareasIncompletas);
});

function validarParametros(req,res,next){
    const { parametro1, parametro2 } = req.query;
    if( !parametro1 || !parametro2 ){
        return res.status(400).send({error:'se requieren los parametros'});
    };
};

router.get("/validacion", validarParametros, (req,res)=>{
    res.send('parametros validos');
});

module.exports = router;