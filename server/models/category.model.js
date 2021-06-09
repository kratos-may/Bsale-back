module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define('category', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'category',
        timestamps: false,
    });
    return category;
}