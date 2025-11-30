import express from 'express'; //ESM import syntax
import 'dotenv/config';
import router from './router';
import { connectDB } from './config/db';

//Connect to DataBase
connectDB();

const app = express();
//Leer datos de forms
app.use(express.json());

//Routing
app.use('/api', router);

export default app;