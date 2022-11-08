"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CustomerAddress extends Model {
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
            this.hasMany(models.Order, {
                foreignKey: "customerId",
                onUpdate: "cascade",
            });
        }
    }
    CustomerAddress.init(
        {
            customerId: DataTypes.INTEGER,
            address: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "CustomerAddress",
        }
    );
    return CustomerAddress;
};
