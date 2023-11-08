const express = express('express');
const router = express.Router();
const { Band, Musician } = require('../models');
const { router } = require('../src/app');


router.get('/band', async (req, res) => {
    try{
            const bands = await Band.findAll({
                include: Musician,})
                res.json(bands)
            } catch (error) {
                res.status(500).json({error: 'Loading server error'})
            }

})

router.get('band/:id', async (req, res) => {
    const number = req.params.id;
    const band = await Band.findAll(number, {
        include: Musician
    })
    res.json(band);
})

module.export = router;