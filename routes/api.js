const express = require('express');
const router = express.Router();

const middleware = require('./middleware')
router.use('/pelis', middleware.checkToken, require('./api/pelis'));
router.use('/usuario', require('./api/usuario'));



module.exports=router;