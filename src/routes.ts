/* eslint-disable import/extensions */
import { Request, Response } from 'express';
import createUser from './service/CreateUser';

export default function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'rodrigues.tallyto@hotmail.com',
    password: '123456',
  });

  console.log(user.email);

  return res.json(user);
}
