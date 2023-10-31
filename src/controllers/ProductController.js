const productServices = require("../services/ProductsServices");
const productRepository = require("../repositories/ProductRepository");
class ProductController {
  //index products
  async index(req, res, next) {
    try {
      const products = await productRepository.getAllProducts();
      if (products) {
        const jsonData = JSON.parse(products);
        res.status(200).json(jsonData);
      }
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
  //product detail
  async productDetail(req, res, next) {
    try {
      const id = req.params.id;
      const response = await productServices.getProductById(id);
      if (response.message === "success") {
        return res.status(200).json(response.data);
      }
      if (response.message === "product not found") {
        res.status(404).json({ message: "Không tìm thấy người dùng với id đã nhập." });
      }
      if (response.message === "failed") {
        res.status(500).send("Đã xảy ra lỗi khi đọc file");
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
  //create product

  async createProduct(req, res, next) {
    try {
      const product = req.body;
      const response = await productServices.createProduct(product);
      if (response.message === "success") {
        return res.status(200).json(response.id);
      }
      if (response.message === "failed") {
        res.status(500).json({ message: "them san pham moi khong thanh cong" });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
  //update product
  updateProduct(req, res, next) {
    try {
      const id = req.params.id;
      const product = { ...req.body, id: id };
      const response = productServices.updateProduct(id, product);
      if (response.message === "success") {
        return res.status(200).json(response.data);
      } else {
        res.status(404).json({ message: "Không tìm thấy người dùng với id đã nhập." });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  //delete product
  deleteProduct(req, res, next) {
    try {
      const id = req.params.id;
      console.log("id controller", id);
      const response = productServices.deleteProduct(id);
      if (response.message === "success") {
        return res.status(200).json({ message: "Đã xóa sản phẩm thành công" });
      } else {
        return res.status(404).json({ message: "Lỗi" });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}
module.exports = new ProductController();
