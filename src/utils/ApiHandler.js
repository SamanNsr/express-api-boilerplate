import httpStatus from 'http-status';
import axios from 'axios';
import logger from '../config/logger';
import systemConfig from '../config/config';
import Misc from '../services/misc.service';
import { miscTypes } from '../config/consts';
import {
  xhrGlobalOptions as globalOptions,
  authenticationService,
} from '../config/externals';

const ApiHandler = (config) => {
  const instance = axios.create(config);
  const request = async (options, data, onUploadProgress) => {
    const { method } = options;
    const innerOptions = {
      ...globalOptions,
      ...options,
      headers: {
        ...globalOptions.header,
        ...options.headers,
      },
    };

    let tokens;
    try {
      tokens = await Misc.getMiscDataByType(miscTypes.SERVICE_AUTH_DATA);
    } catch (e) {}
    if (tokens && tokens.access) {
      innerOptions.headers.Authorization = `Bearer ${tokens.access}`;
    }

    if (data) innerOptions.data = data;

    const normalizedMethodName = method.toLowerCase();

    if (normalizedMethodName === 'put' || normalizedMethodName === 'post') {
      innerOptions.headers['Content-Type'] = 'application/json';
    }

    return new Promise((resolve, reject) => {
      instance
        .request({
          ...innerOptions,
          onUploadProgress: (progress) => {
            if (onUploadProgress) onUploadProgress(progress);
          },
        })
        .then((res) => resolve(res.data))
        .catch(async (err) => {
          if (err.response.data.code === httpStatus.UNAUTHORIZED) {
            const { request } = ApiHandler(authenticationService.config);
            const refreshToken = (
              await Misc.getMiscDataByType(miscTypes.SERVICE_AUTH_DATA)
            ).refresh;
            const body = { refreshToken };
            request(authenticationService.refreshTokens, body)
              .then(async (res) => {
                await Misc.updateMiscDataByType(
                  miscTypes.SERVICE_AUTH_DATA,
                  res
                );
                logger.info(
                  `${systemConfig.service.normalizedName} Refreshed tokens Successfully`,
                );
                request(options, data, onUploadProgress);
              })
              .catch((err) => reject(err));
          } else {
            reject(err.response.data);
          }
        });
    });
  };

  return {
    request,
  };
};

export default ApiHandler;
