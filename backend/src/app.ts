import express from 'express';
import { decryptRequest } from './middlewares/decrypt';
import { getData } from './middlewares/get-data';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/getDataTest', decryptRequest, getData, (req, res) => {
  res.send(res.locals.data as string);
});

export { app, port };
