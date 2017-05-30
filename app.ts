import * as express from 'express';
import apiEndpoint from './common/api-endpoint';
import RootRouter from './common/router';
import config from './common/config';
import { createLogger } from './common/logger';
import * as bodyParser from 'body-parser';

const app = express();
const log = createLogger('app');

console.log('//');
/* Configuration */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(apiEndpoint);
app.use(RootRouter);

app.listen(config.app.port, () => {
  log.info(`Server started on ${config.app.port}`);
});
