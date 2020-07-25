import express from 'express';
import helloWorld from './routes';

const app = express();
app.get('/', helloWorld);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running at => http://localhost:${PORT}`);
});
