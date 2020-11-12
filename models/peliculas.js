module.exports = (sequelize, type)=>{
    return sequelize.define('pelicula',{
        id_pelicula:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: type.STRING,
        descripcion: type.STRING,
        director: type.STRING,

    });
}