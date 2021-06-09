/*este archivo contiene las asociaciones de las tablas de la bd */
const db = require("../models/index");
db.
Product = db.product;
Category = db.category;

Category.hasMany(Product, {
    foreignKey: 'category'
});
Product.belongsTo(Category, {foreignKey: 'category',as:'categories'});