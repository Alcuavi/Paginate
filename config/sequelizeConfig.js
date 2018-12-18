const Sequelize = require('sequelize');
class SequelizeConf {
    static getConnection() {
        return new Sequelize('sakila', 'root', 'mysql', {
            host: 'localhost',
            dialect: 'mysql',
            pool: {
                max: 5,
                min:0,
                idle: 10000
            }
        });
    }
}


module.exports = SequelizeConf;