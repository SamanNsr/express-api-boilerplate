import express from 'express';
import httpStatus from 'http-status';

const router = express.Router();

router.route('/healthCheck').get((req, res) => res.sendStatus(httpStatus.OK));

export default router;
