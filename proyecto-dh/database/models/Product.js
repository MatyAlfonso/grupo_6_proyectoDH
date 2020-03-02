module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        category: {
            type: dataTypes.STRING,
            allowNull: false
        },
        colors: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0
        }/*
        image: {
            type: dataTypes.BLOB,
            allowNull: false
        }*/
    };
    let config = {
        tableName: "products",
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsToMany(models.Users, {
            as: "users",
            through: "user_product",
            foreignKey: "products_id",
            otherKey: "users_id",
            timestamps: false

        });
    }

    return Product;
}