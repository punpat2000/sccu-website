import express from 'express';
import { getData } from './controllers/google';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', async (req, res) => {
  const data = await getData();
  res.send(data);
});

export { app, port };
