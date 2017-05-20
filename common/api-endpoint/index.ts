import { Request, Response, Errback } from 'express';
import { EndpointParams, Endpoint } from './api-endpoint.interfaces';

const DEFAULT_STATUS = 200;

function endpointFn(res: Response, data: object, params: EndpointParams = {}): void {
  const { status } = params;

  res
    .status(status || DEFAULT_STATUS)
    .json(data);
}

export const errorEndpoint = (err: Errback, req: Request, res: Endpoint, next: any): void => {
  res.reply({
    error: 'error',
  });
};

const reply = (req: Request, res: Endpoint, next: any): void => {
  res.reply = endpointFn.bind(null, res);

  next();
};

export default reply;
