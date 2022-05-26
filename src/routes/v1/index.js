import express from 'express';
import docsRoute from './docs.route';
import statusRoutes from './status.route';

const router = express.Router();

router.use('/docs', docsRoute);
router.use('/status', statusRoutes);

export default router;
