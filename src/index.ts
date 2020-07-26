import express from 'express';
import routes from './routes';
import './database';

const app = express();
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running at => http://localhost:${PORT}`);
});
