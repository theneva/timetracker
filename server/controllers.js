import { Router as createRouter } from 'express';
import logger from 'morgan';
import { json } from 'body-parser';
import cors from 'cors';

import recordsController from './records';

const router = createRouter();

router.use(logger('dev'));
router.use(json());
router.use(cors());

router.use('/records', recordsController);

export default router;
