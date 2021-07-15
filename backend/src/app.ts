import express from 'express';
import { decryptRequest } from './middlewares/decrypt';
import { getData } from './middlewares/get-data';
import { getDataTest } from './controllers/test.controller';
import { getDataTest2 } from './controllers/test2.controller';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/getDataTest', decryptRequest, getData, getDataTest);
app.get('/getDataTest2', getDataTest2);

export { app, port };
