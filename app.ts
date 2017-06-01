import * as express from 'express';
import * as apiEndpoint from './common/api-endpoint';
import RootRouter from './common/router';
import config from './common/config';
import { createLogger } from './common/logger';
import * as bodyParser from 'body-parser';
import NotFound from './lib/errors/notfound';

const app: express.Express = express();
const log = createLogger('app');

/* Configuration */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(apiEndpoint.attachReply);
app.use(RootRouter);
app.use(apiEndpoint.errorEndpoint);

app.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
  // TOTO fix it
  apiEndpoint.errorEndpoint(new NotFound(), req, res as any, next);
});

app.listen(config.app.port, () => {
  log.info(`Server started on ${config.app.port}`);
});
