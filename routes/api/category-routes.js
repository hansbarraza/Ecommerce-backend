const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(categories => res.json(categories))
  .catch(err => {
    if (err) throw err;
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  // .then(categoryById => {
  //   if (!categoryById) {
  //     res.status(400).json({message:'No category found with this id'});
  //     return;
  //   }
  //   res.json(categoryById);
  // })
  .then(categoryById => !categoryById
    ? res.status(400).json({message: 'No category found with this id'})
    : res.json(categoryById)
  )
  
  .catch(err => {
    if (err) throw err;
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(newCategory => res.json(newCategory))
    .catch(err => {
      if (err) throw err;
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    // .then(updatedCategory => {
    //   if (!updatedCategory[0]) {
    //     res.status(400).json({message: 'No category found with this id'})
    //     return;
    //   }
    //   res.json(updatedCategory);
    // })
    .then(updatedCategory => !updatedCategory[0]
      ? res.status(400).json({message: 'No category found with this id'})
      : res.json(updatedCategory)
    )
    
    .catch(err => {
      if (err) throw err;
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    // .then(deleteCategory => {
    //   if (!deleteCategory) {
    //     res.status(400).json({message: 'No category found with this id'})
    //     return;
    //   }
    //   res.json(deleteCategory);
    // })
    .then(deleteCategory => deleteCategory ? res.json(deleteCategory) : res.status(402).json({ message: 'No category found with this id'}))
    .catch(err => {
      if (err) throw err;
    })
  })

module.exports = router;
