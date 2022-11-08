"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsToMany(models.Order, { through: "OrderProduct" });
            this.hasMany(models.OrderProduct, {
                foreignKey: "ProductId",
                onUpdate: "cascade",
            });
        }
    }
    Product.init(
        {
            name: DataTypes.STRING,
            price: DataTypes.DECIMAL,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
