import logger from './logger';
import config from './config';
import { ApiHandler } from '../utils';
import { authenticationService } from './externals';

const { request } = ApiHandler(authenticationService.config);

const login = async () => {
  return new Promise((resolve, reject) => {
    const body = {
      username: config.service.name,
      password: config.service.password,
    };
    // login your service
  });
};

const verifySelf = async () => {
  return new Promise((resolve, reject) => {
    // verify your service
  });
};

const startup = async () => {
  return await new Promise((resolve, reject) => {
    try {
      login();
      verifySelf();
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

export default startup;
