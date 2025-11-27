import express from 'express'; //ESM import syntax

const app = express();
const PORT = process.env.PORT || 5000;

//Routing
app.get('/', (req, res) => {
    res.send('¡Hola, mundo! Servidor Express funcionando correctamente.');
});

//Iniciar el servidor

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

