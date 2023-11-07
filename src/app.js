const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get("/musicians", async (req, res) => {
    const musicians = await Musician.findAll({});
    res.json(musicians)
});

app.get("/musicians/1", async (req, res) => {
    const musicianOne = await Musician.findByPk(1);
    res.json(musicianOne)
});


app.use("/musicians", express.json());
app.use("/musicians", express.urlencoded({extended: true}))

musicians = [];

app.post('/musicians', (req, res) => {
    const addNewMusicians = req.Musician
    musicians.push(addNewMusicians)
    res.json(addNewMusicians) 
})

app.put('/musicians/1', (req, res) => {
    const musicianOne = perseInt(req.Musician.findByPk(1))
    const updateMusicianOne = req.Musician
    res.json(updateMusicianOne)
})

app.get('/musicians/:id', async (req, res)  => {
    const musicianID = req.params.id;
    const musician = await Musicians.findByPk(musicianID);
    res.json(musician)

})

app.put('/musicians/:id', async (req, res) => {
    const updateMusicians = await Musicians.update(req.body, {where: {id: req.params.id}})
    res.json(updateMusicians)

});

app.post('/musicians/:id', async (req, res) => {
    const postMusicians = await Musicians.create(req.body);
    res.json(postMusicians)

});
module.exports = app;