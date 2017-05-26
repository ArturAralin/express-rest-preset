import * as log4js from 'log4js';
import { Logger } from 'log4js';
import config from '../config';
import { LoggerSettings } from '../../config/$config.interface';
import { pipe, prop, equals } from 'ramda';

const DEFAULT_LEVEL = 'all';

const LOGGERS: Logger[] = [];
const LOGGERS_CONFIGS: LoggerSettings[] = config.logger;

const findConfig = (targetNamespaces: string) =>
  pipe(prop('namespaces'), equals(targetNamespaces));

export const createLogger = (loggerNamespaces: string): Logger => {
  const logger: Logger = log4js.getLogger(loggerNamespaces);
  const config = LOGGERS_CONFIGS.find(findConfig(loggerNamespaces)) as LoggerSettings;
  const level = config.level.toLowerCase() || DEFAULT_LEVEL;

  logger.setLevel(level);

  return logger;
};
