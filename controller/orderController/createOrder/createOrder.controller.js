const repositoryOrder = require("../../../repositories/orders.repository");
const repositoryOrderProduct = require("../../../repositories/orderProduct.repository");
const repositoryOrderPayment = require("../../../repositories/orderPayment.repository");
module.exports = async (req, res) => {
    try {
        const { customer_id, total_price, payments_id, products_id } = req.body;
        let newOrderProduct = [];
        let newOrderPayment = [];
        const newOrder = {
            customerId: customer_id,
            price: total_price,
        };

        const createdOrder = await repositoryOrder.create(newOrder);
        for (let i in products_id) {
            newOrderProduct.push({
                OrderId: createdOrder.id,
                ProductId: products_id[i],
            });
        }
        for (let i in payments_id) {
            newOrderPayment.push({
                OrderId: createdOrder.id,
                PaymentMethodId: payments_id[i],
            });
        }

        await repositoryOrderPayment.create(newOrderPayment);
        await repositoryOrderProduct.create(newOrderProduct);
        res.status(200).send({
            status: "success",
            msg: "Successfully created order",
            data: null,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            msg: error.message,
        });
    }
};
