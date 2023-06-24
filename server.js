
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
/**
 * @swagger
 * components:
 *   schemas:
 *     NewItem:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 */

const app = express();
const port = 3000; // Choose a port number


const cardRoutes = require('./routes/cardRoutes');
app.use('/hello', cardRoutes);

const swaggerDocs = require('./config/swaggerConfig'); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});