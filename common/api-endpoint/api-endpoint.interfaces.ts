import { Response } from 'express';

export interface EndpointParams {
  status?: number;
}

export interface Endpoint extends Response {
  reply(data: object, params?: EndpointParams): void;
}
