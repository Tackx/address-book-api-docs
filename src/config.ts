import path from 'path';

export abstract class LogConfig {
  public static params = {
    path: '../../logs',
    fileName: 'access.log',
    size: '10M',
    interval: '1d', // rotate once per day
    compress: 'gzip'
  };
}

const docsPath = path.join(__dirname, 'docs');
console.log(docsPath);

export const SwaggerConfig = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'AB-API-Docs',
      description: 'AB-API Documentation',
      contact: {
        name: 'Tackx'
      },
      basePath: '/api',
      servers: ['https://ms-api-gw.herokuapp.com'],
      version: <string>process.env.npm_package_version
    }
  },
  apis: [`${docsPath}/*.yml`]
};
