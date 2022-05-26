import httpStatus from 'http-status';
import config from '../config/config';
import logger from '../config/logger';
import ApiError from '../utils/ApiError';

export const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const code = error.code || httpStatus.INTERNAL_SERVER_ERROR;
    const statusCode = error.statusCode || httpStatus[`${code}_NAME`];
    const message = error.message || statusCode;
    error = new ApiError(code, statusCode, message, false, err.stack);
  }
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  let { code, statusCode, message, textId } = err;
  if (config.env === 'production' && !err.isOperational) {
    code = code || httpStatus.INTERNAL_SERVER_ERROR;
    statusCode = statusCode || httpStatus['500_NAME'];
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
    textId = textId || 'messages.error.internalServerError';
  }

  res.locals.errorMessage = err.message;

  const response = {
    code,
    statusCode: statusCode || httpStatus[`${code}_NAME`],
    message,
    textId,
    ...(config.env === 'development' && { stack: err.stack }),
  };

  if (config.env === 'development') {
    logger.error(err);
  }

  res.status(code).send(response);
};
