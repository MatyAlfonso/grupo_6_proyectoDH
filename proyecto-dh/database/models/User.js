module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        firstName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image: {
            type: dataTypes.BLOB
        }
    };
    let config = {
        tableName: "users",
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsToMany(models.Products, {
            as: "products",
            through: "user_product",
            foreignKey: "users_id",
            otherKey: "products_id",
            timestamps: false

        });
    }

    return User;
}