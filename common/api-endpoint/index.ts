import { Request, Response, Errback, NextFunction } from 'express';
import { pick, bind, assoc, defaultTo } from 'ramda';
import AppError from '../error-default';
import { createLogger } from '../logger';
import UnexpectedError from '../../lib/errors/unexpected';

const DEFAULT_STATUS = 200;

const logger = createLogger('api-endpoint');

function endpointFn(res: Response, data: object, params: App.EndpointParams = {}): void {
  const { status } = params;

  logger.debug(data as any);

  res
    .status(status || DEFAULT_STATUS)
    .json(data);
}

export const errorEndpoint = (err: AppError, req: Request, res: App.Endpoint, next: NextFunction): void => {
  let error = err;

  if (!err.code && !err.status) {
    const stack = (err as any).stack;

    error = new UnexpectedError({ stack });
  }

  logger.error(`code: ${error.code}, info: ${error.info || error.message}`);

  res
    .status(error.status)
    .json(pick(['code', 'message', 'info'], error));
};

export const attachReply = (req: Request, res: App.Endpoint, next: NextFunction): void =>
  assoc('reply', endpointFn.bind(null, res), res) && next();
