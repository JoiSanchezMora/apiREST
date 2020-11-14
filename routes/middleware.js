const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next)=>{

    if(!req.headers['user-token']){
        return res.json({error:'necesitas un token'});

    }
    const userToken = req.headers['user-token'];
    let payload ={};

    try {
        payload = jwt.decode(userToken, 'pepito');
    } catch (error) {
        return res.json({error:'token erroneo'});

    }

    if(payload.expiredAt < moment().unix()){
        return res.json({error:'token expirado'});
    }
    
    next();
}

module.exports={
    checkToken : checkToken,
};