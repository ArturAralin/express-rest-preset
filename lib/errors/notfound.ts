import AppError from '../../common/error-default';

export default class ValidationError extends AppError {
  public status: number = 404;
  public code: number = 10001;
  public message: string = 'Route is not found';
}
