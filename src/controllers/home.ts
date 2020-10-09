import * as express from 'express';

const createEmail = (name: String) => `${name}@gmail.com`;

const home = (req: express.Request, res: express.Response) => {
  res.status(200).send(createEmail('vissarion'));
};

export default home;
