import { Router } from "express";

const router = Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('¡Hola, mundo! Ruta desde el router funcionando correctamente.');
});
router.get('/nosotros', (req, res) => {
    res.send('¡Página de Nosotros!');
});
router.get('/blog', (req, res) => {
    res.send('¡Página de Blog!');
});

export default router;