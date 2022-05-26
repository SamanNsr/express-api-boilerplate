const ApiHandlerMock = require('./utils/ApiHandler');
const { axiosRequestMock } = require('./utils/external.kyc.request.service');

jest.setTimeout(60000);
ApiHandlerMock();
axiosRequestMock();
