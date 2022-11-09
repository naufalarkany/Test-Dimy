const {
    Order: Model,
    Customer,
    Product,
    PaymentMethod,
    OrderProduct,
    OrderPayment,
} = require("../models");

exports.create = async (newOrder) =>
    new Promise((resolve, reject) => {
        Model.create(newOrder)
            .then((data) => {
                resolve(data);
            })
            .catch(reject);
    });

exports.findAll = async () =>
    new Promise((resolve, reject) => {
        Model.findAll({
            include: [
                {
                    model: Customer,
                },
                {
                    model: OrderProduct,
                    include: {
                        model: Product,
                    },
                },
                {
                    model: OrderPayment,
                    include: {
                        model: PaymentMethod,
                    },
                },
            ],
        })
            .then((data) => {
                resolve(data ? data : null);
            })
            .catch(reject);
    });
