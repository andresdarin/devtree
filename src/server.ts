import express from 'express'; //ESM import syntax
const app = express();
import router from './router';

//Leer datos de forms
app.use(express.json());

//Routing
app.use('/api', router);

export default app;