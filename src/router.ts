import express from 'express';

import * as demoController from './resources/demo/demoController';

const router = express.Router();

router.get('/demo', demoController.index);

export default router;
