import { Router } from "express";
import User from "./models/User";

const router = Router();

/* Auth and Register */
router.post('/auth/register', (req, res) => {
    // Lógica de autenticación
    res.send("Register endpoint");
    console.log("Register endpoint accessed");
    console.log(req.body);
});

export default router;