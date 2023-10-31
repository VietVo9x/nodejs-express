const express = require("express");
const router = express.Router();
const fs = require("fs");
const productController = require("../controllers/ProductController");

router.get("/:id", productController.productDetail);

router.get("/", productController.index);

router.post("/", productController.createProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
