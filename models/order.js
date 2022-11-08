"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Customer, {
                foreignKey: "customerId",
                onUpdate: "cascade",
            });
            this.belongsToMany(models.Product, { through: "OrderProduct" });
            this.belongsToMany(models.PaymentMethod, {
                through: "OrderPayment",
            });
            this.hasMany(models.OrderProduct, {
                foreignKey: "OrderId",
                onUpdate: "cascade",
            });
            this.hasMany(models.OrderPayment, {
                foreignKey: "OrderId",
                onUpdate: "cascade",
            });
        }
    }
    Order.init(
        {
            customerId: DataTypes.INTEGER,
            price: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Order",
        }
    );
    return Order;
};
