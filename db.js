const Sequelize = require('sequelize');

const modeloPelis = require('./models/peliculas');

const sequelize = new Sequelize('pelisdb', 'root', '', {
    host:'localhost',
    dialect:'mysql'
});

const pelicula = modeloPelis(sequelize, Sequelize);

sequelize.sync({force : false})
    .then(()=>{
        console.log('funcionando');
    })

module.exports={
    pelicula
}