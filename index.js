import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { PORT } from './src/config/env.js';
import mainRouter from './src/routes/mainRouter.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use('/api/static', express.static('public/'));

app.use('/api', mainRouter);

app.listen(PORT, () => {
  console.log(`[server]: Server is running on ${PORT}`);
});
