const express = require('express');
const router = express.Router();

router.use('/pelis', require('./api/pelis'));
router.use('/usuario', require('./api/usuario'));



module.exports=router;