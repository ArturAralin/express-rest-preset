import { Router, Request } from 'express';
import { Endpoint } from '../../common/api-endpoint';

const expressPromiseRouter = require('express-promise-router');
const router: Router = expressPromiseRouter();

router.get('/', (req: Request, res: Endpoint) => {
  res.endpoint({
    hello: 'world',
  });
});

export default router;
