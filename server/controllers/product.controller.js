const Sequelize = require('sequelize');
const op = Sequelize.Op;
const db = require("../models");

Product = db.product;
Category = db.category;
/*metodo que me obtiene todos los productos sin una clausula where */
async function getProduct(req,res,next){
    try {
        let products = await Product.findAll({
            include:[
                {
                    model: Category,
                    as: 'categories',
                    attributes: ['id','name'],
                }
            ],
        });
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send({
            message: error
        });
        next(error);
    }    
}
/*metodo que me obtiene todos los productos sin una clausula where */
async function getProductByCategory(req,res,next){
    try {
        let products = await Product.findAll({
            where:{
                category: req.params.id
            },
            include:[
                {
                    model: Category,
                    as: 'categories',
                    attributes: ['id','name'],
                }
            ],
        });
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send({
            message: error
        });
        next(error);
    }    
}
/*metodo que obtiene todos los productos por una expresion regular */
async function search(req,res,next){
    try {
        
        let products = await Product.findAll({
            where:{
                name: {[op.like]:`%${req.params.value}%`}
            },
            include:[
                {
                    model: Category,
                    as: 'categories',
                    attributes: ['id','name'],
                }
            ],
        });
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send({
            message: error
        });
        next(error);
    }    
}

module.exports = {
    getProduct,
    getProductByCategory,
    search
}