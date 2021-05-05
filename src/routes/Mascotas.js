const express = require('express');
const router = express.Router();

//Import model
const Pets = require('../models/pets');

router.get('/', async (req, res) => {
    const arrayPets = await Pets.find();
    res.render("mascotas",{
        titulo: "Lista de Mascotas",
        arrayPets
    });
});

//Ruta para añadir elementos a la DB
router.post('/add', async (req,res) => {
    //modela los datos pasados del form por POST
    const pet = new Pets(req.body);
    //guarda los datos
    await pet.save();
    //redirecciona a la misma pag
    res.redirect('/mascotas');
})

module.exports = router;