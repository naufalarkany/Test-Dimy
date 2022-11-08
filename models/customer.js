"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.CustomerAddress, {
                foreignKey: "customerId",
                onUpdate: "cascade",
            });
            this.hasMany(models.Order, {
                foreignKey: "customerId",
                onUpdate: "cascade",
            });
        }
    }
    Customer.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Customer",
        }
    );
    return Customer;
};
