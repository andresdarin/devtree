import express from 'express'; //ESM import syntax
const app = express();
import router from './router';

//Routing

app.use('/api', router);

export default app;