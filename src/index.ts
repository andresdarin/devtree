import colors from "colors";
import app from "./server";

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(colors.cyan.italic(`Servidor escuchando en el puerto ${PORT}`));
});