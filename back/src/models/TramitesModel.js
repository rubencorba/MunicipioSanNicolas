const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Tramite', {
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    dni:{
      type:DataTypes.INTEGER,
      allowNull:false,
      /* validate: {
        max: 5,
        min: 1,
      } */
    },
    fechaNacimiento:{
      type:DataTypes.STRING,
      allowNull:true
    },
    domicilio:{
      type:DataTypes.STRING,
      allowNull:false
    },
    sexo:{
      type:DataTypes.ENUM('Masculino','Femenino','Otro'),
      allowNull:false
    },
    estado:{
      type:DataTypes.ENUM('pendiente','aprobado','rechazado'),
      allowNull:false
    },
    imagen: {
      type: DataTypes.STRING,  // Aquí solo almacenamos la ruta del archivo o el nombre del archivo
      allowNull: true,
    },
    comentario: {
      type: DataTypes.STRING,  // Aquí solo almacenamos la ruta del archivo o el nombre del archivo
      allowNull: true,
    }
  },
    {timestamps:false});
};