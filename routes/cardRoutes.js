const express = require('express');
const data = require('../data');

const router = express.Router();
/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a text
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
router.get('/', (req, res) => {
   res.json(data);
});

/**
 * @swagger
 * /hello:
 *   post:
 *     summary: Create a new item
 *     description: Add a new item to the storage
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
router.post('/', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.status(201).json(newItem);
 });

module.exports = router;