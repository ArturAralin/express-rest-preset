import { AppRouter } from '../../common/router';
import * as joi from 'joi';
import { ctrl } from '../controllers/index';

export const index: AppRouter[] = [
  {
    path: '/',
    method: 'get',
    controller: ctrl,
    validator: {
      key: joi.string(),
    },
  },
  {
    path: '/post',
    method: 'post',
    controller: ctrl,
    validator: {
      abc: joi.string(),
    },
  },
];
