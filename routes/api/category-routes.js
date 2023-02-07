const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then(data => {
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).json({
      msg: "There was an error",
      error: error
    })
  })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id).then(data => {
    res.json(data);
  }).catch(error => {
    res.status(500).json({
      msg: "Error retrieving category",
      error: error
    })
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
