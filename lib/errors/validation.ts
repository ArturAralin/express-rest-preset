import AppError from '../../common/error-default';

export default class ValidationError extends AppError {
  public status: number = 500;
  public code: number = 10000;
  public message: string = 'Validation error';
}
