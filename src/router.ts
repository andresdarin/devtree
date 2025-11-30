import { Router } from "express";

const router = Router();

/* Auth and Register */
router.post('/auth/register', (req, res) => {
    // Lógica de autenticación
    res.send(req.body);
    console.log(req.body);
});

export default router;