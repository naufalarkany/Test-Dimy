const repository = require("../../../repositories/payments.repository");
module.exports = async (req, res) => {
    try {
        const payments = await repository.getAll();
        res.status(200).send({
            status: "success",
            msg: "Get All Payments Method Success",
            data: payments,
        });
    } catch (error) {
        res.status(500).send({
            status: "failed",
            msg: error.message,
        });
    }
};
