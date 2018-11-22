import express from 'express';

import { apiController, nmdController } from './controllers';

const router = express.Router();

router.get('/', apiController.get_information);
router.get('/nmd/hello', nmdController.get_hello);

export default router;