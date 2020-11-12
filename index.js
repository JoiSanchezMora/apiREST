const express = require('express');

require('./db');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api', require('./routes/api'));

app.listen(app.get('port'), () => {
    console.log('escuchando en el puerto: ', app.get('port'));
});