const customers = require("./customerController");
const payments = require("./paymentController");
const products = require("./productController");
const orders = require("./orderController");

module.exports = {
    customers,
    payments,
    products,
    orders,
};
