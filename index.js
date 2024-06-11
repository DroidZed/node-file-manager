import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { PORT } from './src/config/env.js';
import mainRouter from './src/routes/mainRouter.js';

import swaggerUi from 'swagger-ui-express';
import openApiDocumentation from './openapi.json' assert { type: 'json' };

const app = express();

app.disable('x-powered-by'); // less hackers know about our stack

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use('/api/static', express.static('public/'));

app.use('/api', mainRouter);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

app.listen(PORT, () => {
  console.log(`[server]: Server is running on ${PORT}`);
});
