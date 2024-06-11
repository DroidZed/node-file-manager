import multer, { diskStorage } from 'multer';

import { __DEV__ } from '../config/env.js';

const upload = multer({
  storage: diskStorage({
    destination: (_req, _file, callback) => {
      callback(null, __DEV__ ? 'public/' : '/usr/src/app/public/');
    },
    filename: (_req, file, callback) => {
      const parts = file.originalname.split('.');
      callback(
        null,
        `${Date.now()}-${Math.round(Math.random() * 1e9)}.${
          parts[parts.length - 1]
        }`
      );
    },
  }),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

export default upload;
