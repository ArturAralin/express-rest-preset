import { AppRouter } from '../../common/router';
import * as joi from 'joi';
import { Router, Request } from 'express';
import { Endpoint } from '../../common/api-endpoint/api-endpoint.interfaces';

const ctrl: any = (req: Request, res: Endpoint): void => {
  res.reply({
    ok: 123,
  });
};

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
