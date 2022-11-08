const { OrderProduct: Model } = require("../models");

exports.create = async (newOrder) =>
    new Promise((resolve, reject) => {
        Model.bulkCreate(newOrder)
            .then((data) => {
                resolve(data);
            })
            .catch(reject);
    });
