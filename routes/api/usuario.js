const express = require('express');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');
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

router.post('/login', async (req, res)=>{
    const user = await users.findOne({where :{email : req.body.email}});
    
    if(user){
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        console.log('password: ', req.body.password);
        console.log('userpassword: ', user.password)
        console.log('iguales : ',iguales);
        if(iguales){
            res.json({success:createToken(user)});
        }else{
            res.json({error: 'error usuario y/o contraseña'});
        }

    }else{
        res.json({error: 'error usuario y/o contraseña'});
    }
    
});

const createToken = (usuario)=>{
    const payload={
        usuarioId: usuario.id,
        createdAt:moment().unix(),
        expiredAt:moment().add(5, 'minutes').unix()
    }
    return jwt.encode(payload, 'pepito');
}

module.exports=router;