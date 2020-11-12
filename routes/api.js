const express = require('express');
const router = express.Router();

router.use('/pelis', require('./api/pelis'));



module.exports=router;