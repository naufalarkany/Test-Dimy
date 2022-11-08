const { Customer: Model, CustomerAddress } = require("../models");

exports.getAll = () =>
    new Promise((resolve, reject) => {
        Model.findAll({
            include: {
                model: CustomerAddress,
            },
        })
            .then((data) => {
                resolve(data ? data : null);
            })
            .catch(reject);
    });
