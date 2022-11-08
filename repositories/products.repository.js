const { Product: Model } = require("../models");

exports.getAll = () =>
    new Promise((resolve, reject) => {
        Model.findAll()
            .then((data) => {
                resolve(data ? data : null);
            })
            .catch(reject);
    });
