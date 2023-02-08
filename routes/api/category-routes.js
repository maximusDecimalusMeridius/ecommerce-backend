const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//GET all categories
router.get('/', (req, res) => {
  Category.findAll({
    include:[Product]
  }).then(data => {
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).json({
      msg: "There was an error",
      error: error
    })
  })
});

//GET one category based on the id value passed in params
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include:[Product]
  }).then(data => {
    res.json(data);
  }).catch(error => {
    res.status(500).json({
      msg: "Error retrieving category",
      error: error
    })
  })
});

//CREATE a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  }).then( data => {
    res.status(201).json(data);
  }).catch( error => {
    res.json({
      msg: "Error creating new category",
      error: error
    })
  })
});

//UPDATE a category based on the id passed in params
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

//DELETE a category based on the id passed in params
router.delete('/:id', (req, res) => {
  Category.destroy({
    where:{
        id:req.params.id
    }
  }).then(data=>{
      if(data){
          return res.json(data)
      } else {
          return res.status(404).json({msg:"no such record"})
      }
  }).catch(err=>{
      console.log(err);
      res.status(500).json({
          msg:"an error occurred",
          err:err
      })
  })
});

module.exports = router;
