import express, { NextFunction, Request, Response } from 'express';
import logger from './middleware/logger';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { SwaggerConfig } from './config';

const app = express();

app.use(express.json());

app.use(logger('file'));
if (<string>process.env.NODE_ENV === 'production') {
  app.use(logger('console'));
} else {
  app.use(logger('dev'));
}

const swaggerDocs = swaggerJsDoc(SwaggerConfig);

// API Routes
app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(swaggerDocs));
app.get('/spec', (req: Request, res: Response) => {
  res.json(swaggerDocs);
});

// Error handling
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({ message: 'Incorrect API path (docs)' });
});

// Default error
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (!err.message) {
    err.message = 'Something went wrong';
  }
  if (!err.status) {
    err.statusCode = 500;
  }
  res.status(err.statusCode).json(`${err.message}`);
});

export default app;
