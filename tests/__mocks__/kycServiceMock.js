const kycService = {
  apis: {
    queryTiers: {
      config: {
        type: 'QUERY',
        method: 'GET',
        url: `/tiers`,
      },
      data: {
        code: 200,
        statusCode: 'SUCCESS_QUERY_TIERS',
        message: '',
        data: { results: [{}, {}], totalResults: 2 },
      },
    },

    getTierById: {
      config: {
        method: 'GET',
        type: 'GET',
        url: `/tiers`,
      },
      data: {
        code: 200,
        statusCode: 'SUCCESS_GET_TIER_BY_ID',
        message: '',
        data: {
          name: 'Tier-1',
          description: 'tier 1',
          serviceConsumerId: '618f6410596ec0edeae7b6e0',
          dataFields: [{}],
          documentFields: [{}],
          id: '618f65e12c3a2807fa7153d0',
        },
      },
    },
    // kyc processes
    queryKycProcesses: {
      config: {
        type: 'QUERY',
        method: 'GET',
        url: `/kycProcesses`,
      },
      data: {
        code: 200,
        statusCode: 'SUCCESS_QUERY_KYC_PROCESS',
        message: '',
        data: { results: [{}, {}], totalResults: 2 },
      },
    },

    // kycRequests
    createKycRequest: {
      config: {
        type: 'POST',
        method: 'POST',
        url: '/kycrequests',
      },
      data: {
        code: 201,
        statusCode: 'SUCCESS_CREATE_KYC_REQUEST',
        message: '',
        data: {
          id: '618f62f406a22dadc69b2ba7',
          dataFields: [
            {
              id: '618f62f406a22dadc69b2ba7',
              status: 'PENDING',
              value: 'kyc@kyc.com',
            },
            {
              id: '618f635920840298697a1fdd',
              status: 'PENDING',
              value: '09123456789',
            },
          ],
          documentFields: [
            {
              fileID: 'fileID one',
              id: {
                description: 'ID_DOCUMENT',
                id: '618f64cfd899710125dd336e',
                name: 'ID_DOCUMENT',
                validTypes: ['DRIVER_LICENCE_FRONT', 'ID_CARD_FRONT', 'PASSPORT_FRONT'],
              },
              status: 'PENDING',
              type: 'DRIVER_LICENCE_FRONT',
            },
          ],
          hasRejectedParent: false,
          processId: '618f70d5d21d9700da226235',
          serviceConsumerId: '618f6410596ec0edeae7b6e0',
          status: 'PENDING',
          tierId: '618f6398234783b3a86c463f',
          userId: '6191fa34f9c09334aff3eb79',
        },
      },
    },
    updateKycRequest: {
      config: {
        type: 'PATCH',
        method: 'PATCH',
        url: `/kycrequests/`,
      },
      data: {
        code: 200,
        statusCode: 'SUCCESS_UPDATE_KYC_REQUEST',
        message: '',
        data: {
          hasRejectedParent: false,
          serviceConsumerId: '618f6410596ec0edeae7b6e0',
          processId: expect.any(Object),
          tierId: '618f6398234783b3a86c463f',
          userId: '6191fa34f9c09334aff3eb79',
          status: 'CONFIRMED',
          dataFields: [
            {
              id: '618f62f406a22dadc69b2ba7',
              status: 'PENDING',
              value: 'kyc@kyc.com',
            },
            {
              id: '618f635920840298697a1fdd',
              status: 'PENDING',
              value: '09123456789',
            },
          ],
          documentFields: [
            {
              fileID: 'fileID one',
              id: {
                description: 'ID_DOCUMENT',
                id: '618f64cfd899710125dd336e',
                name: 'ID_DOCUMENT',
                validTypes: ['DRIVER_LICENCE_FRONT', 'ID_CARD_FRONT', 'PASSPORT_FRONT'],
              },
              status: 'PENDING',
              type: 'DRIVER_LICENCE_FRONT',
            },
          ],
          id: '618f6398234783b3a86c463f',
        },
      },
    },
    deleteKycRequest: {
      config: {
        method: 'DELETE',
        type: 'DELETE',
        url: `/kycrequests`,
      },
      data: {
        code: 200,
        statusCode: 'SUCCESS_DELETE_KYC_REQUEST',
        message: '',
        data: {
          dataFields: [
            {
              id: '618f62f406a22dadc69b2ba7',
              value: 'kyc@kyc.com',
            },
            {
              id: '618f635920840298697a1fdd',
              value: '09123456789',
            },
          ],
          documentFields: [
            {
              fileID: 'fileID one',
              id: '618f64cfd899710125dd336e',
              status: 'PENDING',
              type: 'DRIVER_LICENCE_FRONT',
            },
          ],
          hasRejectedParent: true,
          id: '618f6398234783b3a86c463f',
          processId: '618f70d5d21d9700da226235',
          serviceConsumerId: '618f6410596ec0edeae7b6e0',
          status: 'PENDING',
          tierId: '618f6398234783b3a86c463f',
          userId: '6191fa34f9c09334aff3eb79',
        },
      },
    },
    queryKycRequests: {
      config: {
        method: 'GET',
        type: 'QUERY',
        url: `/kycRequests`,
      },
      data: {
        code: 200,
        statusCode: 'SUCCESS_QUERY_KYC_REQUEST',
        message: '',
        data: { results: [{}, {}], totalResults: 2 },
      },
    },

    getKycRequestById: {
      config: {
        method: 'GET',
        type: 'GET',
        url: `/kycRequests`,
      },
      data: {
        code: 200,
        statusCode: 'SUCCESS_GET_KYC_REQUEST_BY_ID',
        message: '',
        data: {
          hasRejectedParent: true,
          serviceConsumerId: {
            admins: [],
            kycProcessIds: [],
            status: 'ACTIVE',
            name: 'serviceconsumer one',
            apiKey: 'fa17bf9f03a6f88d417f111e168c3aa4',
            webHook: [],
            id: '618f6410596ec0edeae7b6e0',
          },
          processId: {
            name: 'KYC-PROCESS-1',
            description: 'kyc process 1',
            id: '618f70d5d21d9700da226235',
          },
          tierId: {
            name: 'Tier-0',
            description: 'tier 0',
            id: '618f6398234783b3a86c463f',
          },
          userId: '6191fa34f9c09334aff3eb79',
          status: 'PENDING',
          dataFields: [{}],
          documentFields: [{}],
          id: '618f6398234783b3a86c463f',
        },
      },
    },

    getKycRequestByTier: {
      config: {
        method: 'GET',
        type: 'SPECIAL',
        url: `/kycrequests/`,
      },
      data: {
        code: 200,
        statusCode: 'SUCCESS_GET_KYC_REQUEST_BY_TIER',
        message: '',
        data: {
          hasRejectedParent: true,
          serviceConsumerId: '618f6410596ec0edeae7b6e0',
          processId: '618f70d5d21d9700da226235',
          tierId: '618f6398234783b3a86c463f',
          userId: '6191fa34f9c09334aff3eb79',
          status: 'PENDING',
          dataFields: [],
          documentFields: [],
          id: '618f6398234783b3a86c463f',
        },
      },
    },
    getKycRequestStatusByTier: {
      config: {
        method: 'GET',
        type: 'SPECIAL',
        url: `/kycrequests/status/`,
      },
      data: {
        code: 200,
        statusCode: 'SUCCESS_GET_KYC_REQUEST_STATUS_BY_TIER',
        message: '',
        data: 'PENDING',
      },
    },

    queryUserKycs: {
      config: {
        method: 'GET',
        url: `/userKyc`,
        type: 'QUERY',
      },
      data: {
        code: 200,
        statusCode: 'SUCCESS_QUERY_USER_KYC',
        message: '',
        data: { results: [{}], totalResults: 1 },
      },
    },
    getUserKycById: {
      config: {
        method: 'GET',
        url: `/userKyc`,
        type: 'GET',
      },
      data: {
        code: 200,
        statusCode: 'SUCCESS_GET_USER_KYC_BY_ID',
        message: '',
        data: {
          kycRequests: [],
          status: 'ACTIVE',
          userId: '6191fa34f9c09334aff3eb79',
          serviceConsumerId: '618f6410596ec0edeae7b6e0',
          id: '61924ddb509a731f21c8087f',
        },
      },
    },
    updateUserKyc: {
      config: {
        method: 'PATCH',
        url: `/userKyc`,
      },
      data: {
        code: 200,
        statusCode: 'SUCCESS_UPDATE_USER_KYC',
        message: '',
        data: {
          kycRequests: [],
          status: 'BLOCKED',
          userId: '6191fa34f9c09334aff3eb79',
          serviceConsumerId: '618f6410596ec0edeae7b6e0',
          id: '61924ddb509a731f21c8087f',
        },
      },
    },
  },
};

module.exports = { kycService };
