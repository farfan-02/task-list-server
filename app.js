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

const usuarios = [
    { id: 1, username: 'usuario1', password: 'contraseña1' },
    { id: 2, username: 'usuario2', password: 'contraseña2' },
  ];

  dotenv.config();
  const secretKey = process.env.SECRET_KEY;
  
  
  app.use(express.json());
  
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    const usuario = usuarios.find(
      (u) => u.username === username && u.password === password
    );
  
    if (!usuario) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }
  
    const token = jwt.sign({ id: usuario.id, username: usuario.username }, secretKey);
  
    res.json({ token });
  });
  
  app.get('/ruta-protegida', (req, res) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ mensaje: 'Token inválido' });
      }
  
      res.json({ mensaje: 'Acceso autorizado', usuario: decoded });
    });
  });

app.listen(4000, ()=>{
    console.log("servidor corriendo", 4000);
});



