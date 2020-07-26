import { Router } from 'express';
import CreateUser from '../service/CreateUser';

const routes = Router();

routes.get('/user', (req, res) => {
  const user = CreateUser({
    email: 'rodrigues.tallyto@hotmail.com',
    password: '123456',
  });

  console.log(user.email);

  return res.json(user);
});

export default routes;
