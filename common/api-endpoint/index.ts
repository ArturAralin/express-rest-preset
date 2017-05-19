import { Request, Response, Errback } from 'express';

export interface EndpointParams {
  status?: number;
}

export interface Endpoint extends Response {
  endpoint(data: object, params?: EndpointParams): void;
}

const DEFAULT_STATUS = 200;

function endpointFn(res: Response, data: object, params: EndpointParams = {}): void {
  const { status } = params;

  res
    .status(status || DEFAULT_STATUS)
    .json(data);
}

export const errorEndpoint = (err: Errback, req: Request, res: Endpoint, next: any): void => {
  res.endpoint({
    error: 'error',
  });
};

const endpoint = (req: Request, res: Endpoint, next: any): void => {
  res.endpoint = endpointFn.bind(null, res);

  next();
};

export default endpoint;
