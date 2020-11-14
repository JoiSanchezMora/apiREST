const Sequelize = require('sequelize');

const modeloPelis = require('./models/peliculas');
const modeloUsers = require('./models/users');

const sequelize = new Sequelize('pelisdb', 'root', '', {
    host:'localhost',
    dialect:'mysql'
});

const pelicula = modeloPelis(sequelize, Sequelize);
const users = modeloUsers(sequelize, Sequelize);

sequelize.sync({force : false})
    .then(()=>{
        console.log('funcionando');
    })

module.exports={
    pelicula,
    users
}