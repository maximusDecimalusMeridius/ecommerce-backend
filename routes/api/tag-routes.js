const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//GET all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product]
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

//GET one tag based on the id value passed in params
router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [Product]
  }).then(data => {
    res.json(data);
  }).catch(error => {
    res.status(500).json({
      msg: "Error retrieving category",
      error: error
    })
  })
});

//CREATE a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  }).then( data => {
    res.status(201).json(data);
  }).catch( error => {
    res.json({
      msg: "Error creating new category",
      error: error
    })
  })
});

//UPDATE a tag based on the id passed in params
router.put('/:id', (req, res) => {
  Tag.update({
    tag_name: req.body.tag_name
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

//DELETE a tag based on the id passed in params
router.delete('/:id', (req, res) => {
  Tag.destroy({
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
  // delete on tag by its `id` value
});

module.exports = router;
