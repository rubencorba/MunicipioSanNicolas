const { Sequelize } = require('sequelize');
require('dotenv').config();

const conn = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});


const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(conn));

let entries = Object.entries(conn.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
conn.models = Object.fromEntries(capsEntries);



/* const UsersModel = require ('./models/UsersModel')
const TramitesModel = require('./models/TramitesModel'); */

const { Tramite } = conn.models;
const { User } = conn.models;

User.hasMany(Tramite);
Tramite.belongsTo(User);

/* UsersModel(Sequelize) */
/* TramitesModel(Sequelize) */

module.exports = { 
    ...conn.models,
    conn
 };