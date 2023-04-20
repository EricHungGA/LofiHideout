const Category = require('../../models/category')

module.exports = {
    getAll
  }

  async function getAll(req, res) {
    let categories;
    try {
      categories = await Category.find({});
    } catch (error) {
      console.error('Could not find categories:', error);
      res.status(500).send('Server error');
      return;
    }
    res.json(categories);
  }