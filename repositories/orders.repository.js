const { Order: Model } = require("../models");

exports.create = async (newOrder) =>
    new Promise((resolve, reject) => {
        Model.create(newOrder)
            .then((data) => {
                resolve(data);
            })
            .catch(reject);
    });
