const db = require("../models");
Category = db.category;
/*metodo que me obtiene todas las categorias */
async function getCategories(req,res,next){
    try {
        let categories = await Category.findAll({
        });
        res.status(200).send(categories)
    } catch (error) {
        res.status(500).send({
            message: error
        });
        next(error);
    }    
}

module.exports = {
    getCategories
}