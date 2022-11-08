const repository = require("../../../repositories/customers.repository");
module.exports = async (req, res) => {
    try {
        const customers = await repository.getAll();
        res.status(200).send({
            status: "success",
            msg: "Get All Customers Success",
            data: customers,
        });
    } catch (error) {
        res.status(500).send({
            status: "failed",
            msg: error.message,
        });
    }
};
