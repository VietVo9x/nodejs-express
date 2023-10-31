const productRepository = require("../repositories/ProductRepository");

class ProductServices {
  //lay du lieu 1 product
  async getProductById(id) {
    try {
      const products = await productRepository.getAllProducts();
      if (products) {
        const jsonData = JSON.parse(products);
        const product = jsonData.find((product) => product.id === id);
        if (product) {
          return {
            message: "success",
            data: product,
          };
        } else {
          return {
            message: "product not found",
          };
        }
      } else {
        return {
          message: "failed",
        };
      }
    } catch (error) {
      throw error;
    }
  }
  //them 1 product
  async createProduct(product) {
    try {
      const response = await productRepository.createProduct(product);
      if (response) {
        return {
          message: "success",
          id: response,
        };
      } else {
        return {
          message: "failed",
        };
      }
    } catch (error) {
      throw error;
    }
  }

  //cap nhat 1 product
  updateProduct(id, product) {
    try {
      const response = productRepository.updateProduct(id, product);
      if (response) {
        return {
          message: "success",
          data: response,
        };
      } else {
        return {
          message: "failed",
        };
      }
    } catch (error) {
      throw new error();
    }
  }
  //xoa 1 product
  deleteProduct(id) {
    try {
      const res = productRepository.deleteProduct(id);
      if (res) {
        return {
          message: "success",
        };
      } else {
        return {
          message: "failed",
        };
      }
    } catch (error) {
      throw new error();
    }
  }
}
module.exports = new ProductServices();
