import * as log4js from 'log4js';
import { Logger } from 'log4js';
import config from '../config';
import { LoggerSettings } from '../../config/$config.interface';
import { pipe, prop, equals } from 'ramda';
import * as path from 'path';
import * as moment from 'moment';

const LOGGERS: Logger[] = [];
const LOGGERS_CONFIGS = config.logger;
const DEFAULT_LEVEL = config.logger.default.level.toLocaleLowerCase();
const loggerFilename = `${moment().format('DD-MM-YYYY-HH:mm:ss')}_${config.env}.log`;

const log = log4js.getLogger('logger-module');

const log4jsConfig: log4js.IConfig = {
  appenders: [
    {
      type: "dateFile",
      filename: `logs/${loggerFilename}`,
      compress: true,
      maxLogSize: 10 * 1024 * 1024,
    },
    {
      type: "stdout",
    },
  ],
} as log4js.IConfig;

log4js.configure(log4jsConfig);

const findConfig = (targetNamespaces: string) =>
  pipe(prop('namespaces'), equals(targetNamespaces));

export const createLogger = (namespace: string): Logger => {
  const loggerNamespace = namespace.toLocaleLowerCase();

  if (loggerNamespace === DEFAULT_LEVEL) {
    log.warn('Can\'t use the name "default", because it is reserved');
  }

  const logger: Logger = log4js.getLogger(loggerNamespace);
  const config: LoggerSettings = LOGGERS_CONFIGS[loggerNamespace];
  const level = config ? config.level.toLowerCase() : DEFAULT_LEVEL;

  logger.setLevel(level);

  return logger;
};
