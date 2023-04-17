const express = require('express');
const router = express.Router();
const Category = require('../../models/category');

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({});
        res.setHeader('Content-Type', 'application/json');
        res.json(categories);
    } catch (error) {
        console.error('Could not fetch categories:', error);
        res.status(500).send('Server error');
    }
});

module.exports = router;