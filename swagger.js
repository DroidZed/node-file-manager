import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'File Manager API',
      description: 'API endpoints file manager service documented on swagger',
      contact: {
        name: 'IPACT Consult',
        email: 'ipactconsult@gmai.com',
        url: 'https://ipactconsult.com',
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://127.0.0.1:7000/',
        description: 'Local server',
      },
      {
        url: 'https://127.0.0.1:7000',
        description: 'Live server',
      },
    ],
  },
  // looks for configuration in specified directories
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default function swaggerDocs(app, port) {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}
