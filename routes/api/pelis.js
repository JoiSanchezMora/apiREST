const express = require('express');
const router = express.Router();

const {pelicula} = require('../../db');

router.get('/', async (req, res)=>{
    const pelis = await pelicula.findAll();
    res.json(pelis);
});

router.post('/', async (req, res)=>{
    const pelis = await pelicula.create(req.body);
    res.json(pelis);
});

router.put('/:id', async (req, res)=>{
    await pelicula.update(req.body, {
        where: {id_pelicula : req.params.id}
    });
    res.json({success:'to flama'});
});

router.delete('/:id', async (req, res)=>{
    await pelicula.destroy({
        where: {id_pelicula : req.params.id}
    });
    res.json({success:'que te lo cargas'});
});



module.exports=router;