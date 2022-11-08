const { Router } = require("express");
const { customers } = require("../controller");
const router = Router();

// Get All Customers data
router.get("/", customers.getCustomers);

module.exports = router;
