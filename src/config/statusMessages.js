import httpStatus from 'http-status';
import { statusCodesByRoutes } from './statusCodes';

const capitalizeString = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

const textIdGeneratorHelper = (string) => {
  const modifiedString = string.split('_');
  if (modifiedString.length > 1) modifiedString.slice(1);
  return modifiedString.map((string, i) => {
    return (i === 0 ? string.toLowerCase() : capitalizeString(string));
  }).join('');
};

/**
 * Extract all general status codes from http-status package
 * then generate all general status text ids
 * @param {object} statusCodesByRoutes
 * @returns {object}
 */
const generalStatusMessagesGenerator = (statusCodes) => {
  let results = { general: {} };
  for (const statusCode of Object.entries(statusCodes)) {
    if (Array.isArray(statusCode)) {
      const statusCodesByRoutestandardRegex =
        /(?=^[A-Z])^((?!(CLASS)|(MESSAGE)|(NAME)|([a-z])).)*$/;
      for (const value of statusCode) {
        if (typeof value === 'string' && statusCodesByRoutestandardRegex.test(value)) {
          results = {
            general: {
              ...results.general,
              [value]: value,
            },
          };
        }
      }
    }
  }
  return results;
};

/**
 * Generate all status text ids from the given object
 * @param {object} statusCodesByRoutes
 * @returns {object}
 */
const statusMessagesGenerator = (statusCodes) => {
  let results = {};
  for (const [serviceName, serviceValues] of Object.entries(statusCodes)) {
    results = {
      ...results,
      [serviceName]: serviceValues,
    };
    for (const [statusCodeKey, statusCodeValue] of Object.entries(results[serviceName])) {
      results = {
        ...results,
        [serviceName]: {
          ...results[serviceName],
          [statusCodeKey]: statusCodeValue,
        },
      };
      if (typeof statusCodeValue === 'string') {
        results = {
          ...results,
          [serviceName]: {
            ...results[serviceName],
            [statusCodeKey]: `messages.${serviceName}.${textIdGeneratorHelper(statusCodeValue)}`,
          },
        };
      }
    }
  }
  return results;
};

const statusMessages = statusMessagesGenerator(
  {
    ...statusCodesByRoutes,
    ...generalStatusMessagesGenerator(httpStatus),
  },
);

export default statusMessages;
