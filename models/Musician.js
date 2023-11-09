const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

let Musician = db.define('musician', {
    name: Sequelize.STRING,
    instrument : Sequelize.STRING
});

router.post(
  '/musicians',
  [
    check('name').notEmpty().withMessage('Name cannot be empty').trim(),
    check('instrument').notEmpty().withMessage('Instrument cannot be empty').trim(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const newMusician = {
      name: req.body.name,
      instrument: req.body.instrument,
    };

    return res.status(200).json({ message: 'Musician added successfully', data: allMusicians });
  }
);

router.post(
  '/musicians',
  [
    check('name')
      .notEmpty().withMessage('Name cannot be empty')
      .isLength({ min: 2, max: 20 }).withMessage('Name must be between 2 and 20 characters')
      .trim(),
    check('instrument')
      .notEmpty().withMessage('Instrument cannot be empty')
      .isLength({ min: 2, max: 20 }).withMessage('Instrument must be between 2 and 20 characters')
      .trim(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const newMusician = {
      name: req.body.name,
      instrument: req.body.instrument,
    };

    
    return res.status(200).json({ message: 'Musician added successfully', data: allMusicians });
  }
);

router.put(
  '/musicians/:id',
  [
    check('name')
      .optional({ nullable: true })
      .isLength({ min: 2, max: 20 }).withMessage('Name must be between 2 and 20 characters')
      .trim(),
    check('instrument')
      .optional({ nullable: true })
      .isLength({ min: 2, max: 20 }).withMessage('Instrument must be between 2 and 20 characters')
      .trim(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const updatedMusician = {
      name: req.body.name,
      instrument: req.body.instrument,
    };

    return res.status(200).json({ message: 'Musician updated successfully', data: updatedMusician });
  }
);


module.exports = router;
