#!/usr/bin/env node ./node_modules/.bin/ts-node

import Server from '../server';
import config from '../common/config';
import { createLogger } from '../common/logger';

const log = createLogger('app');

Server.listen(config.app.port, () => {
  log.info(`Server started on ${config.app.port}`);
});
