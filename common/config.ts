import { readFileSync } from 'fs';
import { pipe, map, apply } from 'ramda';
import { Config } from '../config/$config.interface';
import {resolve} from 'path';

const assignDeep  = require('assign-deep');

const env = process.env.NODE_ENV || 'dev';

const readConfigFile = (filename: string) =>
  readFileSync(resolve(__dirname, `../config/${filename}.json`), 'utf8');

const config: Config = pipe(
    map(pipe(readConfigFile, JSON.parse)),
    apply(assignDeep))
  (['common', env]) as Config;

export default config;
