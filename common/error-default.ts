import { pick } from 'ramda';

export default abstract class AppError {
  public status: number;
  public code: number;
  public message: string;
  public info: any;

  constructor(info?: any) {
    this.info = info;
  }
}
