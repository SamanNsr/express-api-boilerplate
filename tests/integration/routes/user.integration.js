const mongoose = require('mongoose');

setupTestDB();

describe('test', () => {
  describe('user routes', () => {
    test('query user', async () => {
      const res = await request(app).get('/v1/user');

      expect(res.status).toBe(httpStatus.OK);

      expect(res.body).toEqual({
        code: httpStatus.OK,
        statusCode: 'SUCCESS_QUERY_PROCESS',
        message: '',
        data: { results: expect.any(Array), totalResults: 2 },
      });

      expect(res.body.data.results).toHaveLength(2);
    });
  });
});
