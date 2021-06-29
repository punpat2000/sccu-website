import express, { RequestHandler } from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }) as RequestHandler);
app.use(express.json() as RequestHandler);

app.get('/', (req, res) => {
  res.send('hello world!');
});

export { app, port };
