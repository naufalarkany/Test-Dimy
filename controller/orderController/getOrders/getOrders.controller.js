const repository = require("../../../repositories/orders.repository");
module.exports = async (req, res) => {
    try {
        const orders = await repository.findAll();
        res.status(200).send({
            status: "success",
            msg: "Get All Orders Success",
            data: orders,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            msg: error.message,
        });
    }
};
