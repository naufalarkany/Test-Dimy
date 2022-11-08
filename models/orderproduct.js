"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class OrderProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Order, {
                foreignKey: "OrderId",
                onUpdate: "cascade",
            });
            this.belongsTo(models.Product, {
                foreignKey: "ProductId",
                onUpdate: "cascade",
            });
        }
    }
    OrderProduct.init(
        {
            OrderId: DataTypes.INTEGER,
            ProductId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "OrderProduct",
        }
    );
    return OrderProduct;
};
