import { Router } from 'express';

import upload from '../middlewares/multer.js';

const mainRouter = Router();

mainRouter.post('/upload-single', upload.single('file'), (req, res) => {
  res.json({ message: `Uploaded`, ...req.file });
});

mainRouter.post('/upload-multiple', upload.array('files[]', 10), (req, res) => {
  res.json({
    message: `Uploaded`,
    fileNames: req.files?.map((f) => f.filename),
  });
});

export default mainRouter;
