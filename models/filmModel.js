const Sequelize = require('sequelize');
const Connection = require('../config/sequelizeConfig').getConnection();

const Films = Connection.define('film', {
    title:{
        type: Sequelize.STRING
    },
    description:{
        type: Sequelize.STRING
    }
});

module.exports = Films;