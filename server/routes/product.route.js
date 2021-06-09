const router = require("express").Router();
const ProductController = require("../controllers/product.controller");

router.get("/", ProductController.getProduct);
router.get("/:id", ProductController.getProductByCategory);
router.get("/search/:value", ProductController.search);

module.exports = router;

