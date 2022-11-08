const repository = require("../../../repositories/products.repository");
module.exports = async (req, res) => {
    try {
        const products = await repository.getAll();
        res.status(200).send({
            status: "success",
            msg: "Get All Products Success",
            data: products,
        });
    } catch (error) {
        res.status(500).send({
            status: "failed",
            msg: error.message,
        });
    }
};
