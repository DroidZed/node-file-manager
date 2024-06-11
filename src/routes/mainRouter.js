import { Router } from 'express';

import upload from '../middlewares/multer.js';

import {
  returnFileName,
  returnFileNames,
} from '../controllers/mainController.js';

const mainRouter = Router();

mainRouter.post('/upload-single', upload.single('file'), returnFileName);

mainRouter.post(
  '/upload-multiple',
  upload.array('files[]', 10),
  returnFileNames
);

export default mainRouter;
