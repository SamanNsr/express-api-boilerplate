import mongoose from 'mongoose';
import app from './app';
import { config, startup } from './config';
import logger from './config/logger';

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info(`${config.service.normalizedName} connected to DB`);
  server = app.listen(config.port, () => {
    logger.info(
      `${config.service.normalizedName} listening to port ${config.port}`,
    );
    startup().catch((error) => {
      logger.error(JSON.stringify(error));
      exitHandler();
    });
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
