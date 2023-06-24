const express = require('express');
const data = require('../data');
const { getCards, saveCard } = require('../repository/cardRepository')

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
    getCards((error, cards) => {
        if (error) {
          return res.status(500).json({ error: 'Erro ao listar os cards.' });
        }
        return res.json(cards);
      });
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
 *               description:
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
    if(!newItem) {
        return res.status(400).json({ error: 'Descrição obrigatória' });
    }
    saveCard(newItem, (error, cards) => {
        if (error) {
          return res.status(500).json({ error: 'Erro ao salvar o card' });
        }
        return res.status(201).json({ message: 'Card salvo com sucesso' });
      });
 });

module.exports = router;