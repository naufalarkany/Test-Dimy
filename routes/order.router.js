const { Router } = require("express");
const { orders } = require("../controller");
const router = Router();

// Get All Payments method data
router.post("/", orders.createOrder);

module.exports = router;
