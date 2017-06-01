import { Request, Response, Errback, NextFunction } from 'express';
import { pick } from 'ramda';
import AppError from '../error-default';

const DEFAULT_STATUS = 200;

function endpointFn(res: Response, data: object, params: App.EndpointParams = {}): void {
  const { status } = params;

  res
    .status(status || DEFAULT_STATUS)
    .json(data);
}

export const errorEndpoint = (err: AppError, req: Request, res: App.Endpoint, next: NextFunction): void => {
  const response = pick(['code', 'message', 'info'], err);

  res.status(err.status).json(response);
};

export const attachReply = (req: Request, res: App.Endpoint, next: NextFunction): void => {
  res.reply = endpointFn.bind(null, res);

  next();
};
