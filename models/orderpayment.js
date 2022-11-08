"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class OrderPayment extends Model {
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
            this.belongsTo(models.PaymentMethod, {
                foreignKey: "PaymentMethodId",
                onUpdate: "cascade",
            });
        }
    }
    OrderPayment.init(
        {
            OrderId: DataTypes.INTEGER,
            PaymentMethodId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "OrderPayment",
        }
    );
    return OrderPayment;
};
