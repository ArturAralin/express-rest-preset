import AppError from '../../common/error-default';

export default class UnexpectedError extends AppError {
  public status: number = 500;
  public code: number = -1;
  public message: string = 'unexpected error';
}
