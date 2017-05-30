import { Request, Response, Errback, NextFunction } from 'express';

const DEFAULT_STATUS = 200;

function endpointFn(res: Response, data: object, params: App.EndpointParams = {}): void {
  const { status } = params;

  res
    .status(status || DEFAULT_STATUS)
    .json(data);
}

export const errorEndpoint = (err: Errback, req: Request, res: App.Endpoint, next: NextFunction): void => {
  res.reply({
    error: 'error',
  });
};

const reply = (req: Request, res: App.Endpoint, next: NextFunction): void => {
  res.reply = endpointFn.bind(null, res);

  next();
};

export default reply;
