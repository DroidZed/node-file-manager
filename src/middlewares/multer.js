import multer, { diskStorage } from 'multer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const upload = multer({
  storage: diskStorage({
    destination: (req, file, callback) => {
      const _dirname = dirname(fileURLToPath(import.meta.url));
      callback(null, 'public/');
    },
    filename: (req, file, callback) => {
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
