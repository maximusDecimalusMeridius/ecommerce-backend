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
  Category.create({
    category_name: "Test name 2"
  }).then( data => {
    res.status(201).json(data);
  }).catch( error => {
    res.json({
      msg: "Error creating new category",
      error: error
    })
  })
});

router.put('/:id', (req, res) => {
  Category.update({
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id
    }
  }).then( data => {
    res.status(200).json(data)
  }).catch ( error => {
    res.status(500).json({
      msg: "There was an error",
      error: error
    })
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
