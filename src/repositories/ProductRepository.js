const dataBaseMethod = require("../utils/db.util");

class ProductRepository {
  // get all product
  async getAllProducts() {
    return await dataBaseMethod.getData("products");
  }

  //create product
  createProduct(product) {
    return dataBaseMethod.insertItem("products", product);
  }

  //update product
  updateProduct(id, product) {
    return dataBaseMethod.updateItem("products", id, product);
  }
  //delete product
  deleteProduct(id) {
    return dataBaseMethod.deleteItemById("products", id);
  }
}
module.exports = new ProductRepository();
