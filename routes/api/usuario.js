const express = require('express');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const router = express.Router();

const {users} = require('../../db');

router.get('/',  async (req, res)=>{
    const user = await users.findAll();
    res.json(user);
});

router.post('/registro', [
    check('username', 'nombre de usuario obligatorio').not().isEmpty(),
    check('password', 'password obligatoria').not().isEmpty(),
    check('email', 'ingrese email valido').isEmail(),
], async (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(422).json({errores:errors.array()});
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await users.create(req.body);
    res.json(user);
});




module.exports=router;