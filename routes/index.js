const { Router } = require("express");
const customerRouter = require("./customer.router");
const paymentRouter = require("./payment.router");
const productRouter = require("./product.router");
const orderRouter = require("./order.router");
const router = Router();

// routes for all customer needs
router.use("/customers", customerRouter);
router.use("/payments", paymentRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);

module.exports = router;
