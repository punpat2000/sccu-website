import { app, port } from './app';

app.listen(port, () => {
  console.log(`running on ${port}`);
});
