import express from 'express';
import compression from 'compression';
import cors from 'cors';
import router from './router';

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

export default app;
