import dotenv from 'dotenv';
import path from 'path';
import Joi from 'joi';
import packageJSON from '../../package.json';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi
      .string()
      .valid('production', 'development', 'test')
      .required(),
    PORT: Joi
      .number()
      .default(3000),
    MONGODB_URL: Joi
      .string()
      .required()
      .description('Mongo DB url'),
    SERVICE_NAME: Joi
      .string()
      .description('Name of the app')
      .default(packageJSON.name),
    SERVICE_VERSION: Joi
      .string()
      .description('Version of the app')
      .default(packageJSON.version),
    SERVICE_PASSWORD: Joi
      .string()
      .required()
      .description('Password of the app'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  service: {
    name: envVars.SERVICE_NAME,
    normalizedName: `${envVars.SERVICE_NAME.toUpperCase()
      .replace(/-/g, ' ')} V${envVars.SERVICE_VERSION}`,
    version: envVars.SERVICE_VERSION,
    password: envVars.SERVICE_PASSWORD,
  },
};

export default config;
