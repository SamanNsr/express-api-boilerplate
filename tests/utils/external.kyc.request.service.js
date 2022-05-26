const { kycService: mockKycService } = require('../__mocks__/kycServiceMock');
const axiosRequestMock = () => {
  jest.mock('../../src/services/external.kyc.request.service.js', () => {
    return {
      axiosRequest: jest.fn(async (config) => {
        let result;
        Object.values(mockKycService.apis).map((api) => {
          if (api.config.method == config.method && config.url.includes(api.config.url)) {
            if (config.method != 'GET') {
              return (result = api);
            }
            const splitted = config.url.split('/');
            if (splitted.length <= 3 && api.config.type == 'QUERY') {
              result = api;
              return;
            }
            if (splitted.length >= 3 && splitted[2] != '' && api.config.type == 'GET') {
              result = api;
            } else if (
              splitted.length >= 5 &&
              config.url.includes('status') &&
              api.config.url.includes('status')
            ) {
              result = api;
            } else if (
              splitted.length >= 5 &&
              !config.url.includes('status') &&
              !api.config.url.includes('status')
            ) {
              result = api;
            }
          }
        });
        return result.data;
      }),
    };
  });
};

module.exports = { axiosRequestMock };
