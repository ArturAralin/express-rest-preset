import { Router, Request } from 'express';
import { Endpoint } from '../../common/api-endpoint/api-endpoint.interfaces';

const expressPromiseRouter = require('express-promise-router');
const router: Router = expressPromiseRouter();

router.get('/', (req: Request, res: Endpoint) => {
  res.reply({
    hello: 'world',
  });
});

export default router;
