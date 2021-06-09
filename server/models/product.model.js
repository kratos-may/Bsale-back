module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define('product', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        url_image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        discount: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        category: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }, {
        tableName: 'product',
        timestamps: false,
    });
    return product;
}