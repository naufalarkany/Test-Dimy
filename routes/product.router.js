const { Router } = require("express");
const { products } = require("../controller");
const router = Router();

// Get All Products data
router.get("/", products.getProducts);

module.exports = router;
