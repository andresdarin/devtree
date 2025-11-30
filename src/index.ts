import colors from "colors";
import server from "./server";

//Iniciar el servidor
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(colors.cyan.italic(`Servidor escuchando en el puerto ${PORT}`));
});

