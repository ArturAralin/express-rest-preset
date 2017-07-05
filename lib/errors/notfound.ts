import AppError from '../../common/error-default';
import { Request } from 'express';

export default class ValidationError extends AppError {
  public status: number = 404;
  public code: number = 10001;
  public message: string = 'Route is not found';

  constructor(req: Request) {
    super(`Called route path "${req.url}"`);
  }
}
