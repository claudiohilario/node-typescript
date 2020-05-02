import { resolve } from 'path';
import { config } from 'dotenv';

interface ProcessEnv {
  NODE_ENV: 'dev' | 'test' | 'prod';
}

declare let process: {
  env: ProcessEnv;
}

const envFilesMap = {
  dev: '../../.env.dev',
  test: '../../.env.test',
  prod: '../../.env.prod',
}

config({path: resolve(__dirname, envFilesMap[process.env.NODE_ENV])});
