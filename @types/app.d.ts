import { Response } from 'express';

declare global {
  namespace App {
    export interface EndpointParams {
      status?: number;
    }

    export interface Endpoint extends Response {
      reply(data: object, params?: EndpointParams): void;
    }
  } 
}
