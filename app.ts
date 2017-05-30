import * as express from 'express';
import * as apiEndpoint from './common/api-endpoint';
import RootRouter from './common/router';
import config from './common/config';
import { createLogger } from './common/logger';
import * as bodyParser from 'body-parser';

const app = express();
const log = createLogger('app');

/* Configuration */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(apiEndpoint.default);
app.use(RootRouter);
app.use(apiEndpoint.errorEndpoint);

app.listen(config.app.port, () => {
  log.info(`Server started on ${config.app.port}`);
});
