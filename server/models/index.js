const {PORT,FRONT_URL,USER_DB_SQL,DB_SQL,PASSWORD_DB_SQL,HOST_DB_SQL} = require('../config/index');
const {Sequelize} = require("sequelize");
/*conectamos a nuestra bd */
const sequelize = new Sequelize(DB_SQL, USER_DB_SQL, PASSWORD_DB_SQL, {
    dialect: 'mysql',
    host:HOST_DB_SQL,
    logging: false,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
/*comprobamos status de la conexion */
sequelize.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch(err => {
        //console.log("err",err)
        console.log('No se conecto')
    });
db.product = require("./product.model")(sequelize,Sequelize);
db.category = require("./category.model")(sequelize,Sequelize);

module.exports= db;