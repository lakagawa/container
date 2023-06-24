const swaggerJsDoc = require('swagger-jsdoc');

// Swagger options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'My API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
