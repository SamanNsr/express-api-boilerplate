const httpStatus = require('http-status');
const { rolesMap } = require('../../src/config/serviceRights');

const externalServices = {
  authentication: {
    config: {
      baseURL: process.env.AUTHENTICATION_SERVICE_URL || 'http://localhost:3010/v1',
    },
    apis: {
      login: {
        method: 'POST',
        url: '/auth/login-service',
        mock: {
          code: 200,
          statusCode: 'SUCCESS_LOGIN_SERVICE',
          message: '',
          textId: 'messages.auth.successLoginService',
          data: {
            service: {
              notificationActions: [
                {
                  title: 'EMAIL',
                  items: [
                    'NEW_OTC',
                    'OTC_STATUS_CHANGED',
                    'OTC_STATUS_CHANGED',
                    'OTC_WITHDRAW',
                    'OTC_DEPOSIT',
                    'NEW_PROFILE',
                    'PROFILE_PAYMENT_STATUS_CHANGED',
                  ],
                },
              ],
              username: 'exatoshi-otc-service',
              role: '60e1adae1254fa178ca1e54c',
              id: '60e1adb81254fa178ca1e54e',
            },
            tokens: {
              access:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGUxYWRiODEyNTRmYTE3OGNhMWU1NGUiLCJpYXQiOjE2MjY3MTQwNDUsImV4cCI6MTg4NTkxNzY0NSwidHlwZSI6IkFDQ0VTUyJ9.VnHnSc5Dq9RPcVMKHW7aP5YC85IDURnPxIjY3qVDReo',
              refresh:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGUxYWRiODEyNTRmYTE3OGNhMWU1NGUiLCJpYXQiOjE2MjY3MTQwNDUsImV4cCI6MTk0MjI0Njg0NSwidHlwZSI6IlJFRlJFU0gifQ.0RC26VAeUZt3NVn4tnXaM2EOBYOzDpIPYJJ_wMIygmY',
            },
          },
        },
      },
      refreshTokens: {
        method: 'POST',
        url: '/auth/refresh-tokens',
      },
      authConsumer: {
        method: 'POST',
        url: '/services/auth',
        mock: {
          code: 200,
          statusCode: 'SUCCESS_AUTH_SERVICE_CONSUMER',
          message: '',
          textId: 'messages.services.successAuthServiceConsumer',
          data: {
            info: {
              firstName: '',
              middleName: '',
              lastName: '',
              telegramUsername: '',
              fullName: '',
            },
            verifications: {
              identity: true,
              email: true,
              phoneNumber: true,
              telegram: false,
            },
            status: 'USER_ACTIVE',
            username: '1111111111',
            email: 'support@exatoshi.com',
            id: '60e1a9f6877be4329c445948',
            role: {
              name: ['ADMIN'],
              rights: [...rolesMap.ADMIN],
            },
          },
        },
      },
      verify: {
        method: 'POST',
        url: '/services/auth/verify',
        mock: {},
      },
      generateOtp: {
        method: 'POST',
        url: '/otp/generate',
        mock: {
          code: 201,
          statusCode: 'SUCCESS_CREATE_OTP',
          message: 'string',
          textId: 'messages.otp.successCreateOtp',
          data: {
            otp: 123456,
            user: 'string',
            type: 'string',
            id: 'string',
          },
        },
      },
      verifyOtp: {
        method: 'POST',
        url: '/otp/verify',
        mock: {
          code: 201,
          statusCode: 'SUCCESS_VERIFY_OTP',
          message: 'string',
          textId: 'messages.otp.successVerifyOtp',
          data: {
            payload: {
              email: 'test@test.com',
              phoneNumber: '123456789',
            },
          },
        },
      },
      userMessagingInfo: {
        method: 'POST',
        url: `/notif/user`,
        mock: {},
      },
      usersMessagingInfoByQuery: {
        method: 'GET',
        url: `/notif`,
        mock: {},
      },
      getAllRolesByQuery: {
        method: 'GET',
        url: `/roles`,
        mock: {},
      },
    },
  },
};

module.exports = {
  externalServices,
};
