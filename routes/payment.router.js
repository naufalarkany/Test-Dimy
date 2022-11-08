const { Router } = require("express");
const { payments } = require("../controller");
const router = Router();

// Get All Payments method data
router.get("/", payments.getPaymentsMethod);

module.exports = router;
