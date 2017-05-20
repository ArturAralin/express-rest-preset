import * as express from 'express';
import * as api from './common/api-endpoint';
import RootRouter from './lib/routes/index';
import config from './common/config';
import { createLogger } from './common/logger';

const app = express();
const log = createLogger('app');

app.use(api.default);
app.use(RootRouter);

app.listen(config.app.port, () => {
  log.info(`Server started on ${config.app.port}`);
});
