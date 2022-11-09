const repository = require("../../../repositories/orders.repository");
çmodule.exports = async (req, res) => {
    try {
        const { order_id } = req.params;
        const orders = await repository.findOne(order_id);
        res.status(200).send({
            status: "success",
            msg: "Get Order Success",
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
