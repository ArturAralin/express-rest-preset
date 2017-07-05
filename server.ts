import * as express from 'express';
import * as apiEndpoint from './common/api-endpoint';
import RootRouter from './common/router';
import * as bodyParser from 'body-parser';
import NotFound from './lib/errors/notfound';

const app: express.Express = express();

/* Configuration */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(apiEndpoint.attachReply);
app.use(RootRouter);
app.use(apiEndpoint.errorEndpoint);

/* 404 endpoint */
app.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
  apiEndpoint.errorEndpoint(new NotFound(req), req, res as App.Endpoint, next);
});

export default app;
