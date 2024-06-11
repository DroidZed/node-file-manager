import { HOST, PORT } from '../config/env.js';

export async function returnFileName(req, res) {
  res.status(201).json({
    message: `Uploaded`,
    fileName: `${HOST}:${PORT}/api/static/${req.file?.filename}`,
  });
}

export async function returnFileNames(req, res) {
  res.status(201).json({
    message: `Uploaded`,
    fileNames: req.files?.map(
      (f) => `${HOST}:${PORT}/api/static/${f?.filename}`
    ),
  });
}
