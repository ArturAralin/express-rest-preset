import { Request, Response, Errback, NextFunction } from 'express';
import { pick } from 'ramda';
import AppError from '../error-default';
import { createLogger } from '../logger';

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
  const response = pick(['code', 'message', 'info'], err);

  logger.error(`code: ${err.code}, info: ${err.info || err.message}`);

  res.status(err.status).json(response);
};

export const attachReply = (req: Request, res: App.Endpoint, next: NextFunction): void => {
  res.reply = endpointFn.bind(null, res);

  next();
};
