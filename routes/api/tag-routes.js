const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(findAllTags => res.json(findAllTags))
  .catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
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
  .then(findTagById => findTagById ? res.json(findTagById) : res.status(404).json({ message: 'Tag not found with this id'}))
  .catch(err => res.status(400).json(err));
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(createTag => res.json(createTag))
  .catch(err => {
    if (err) throw err;
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(updateTagById => !updateTagById[0] ? res.status(402).json({ message: 'No tag by that id'}) : res.json(updateTagById))
})

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deleteTagById => !deleteTagById ? res.status(402).json({ message: 'No tag by that id'}) : res.json(deleteTagById))
});

module.exports = router;
