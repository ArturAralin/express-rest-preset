import * as log4js from 'log4js';

export const createLogger = (namespace: string): log4js.Logger => {
  return log4js.getLogger(namespace);
};
