const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  // Đọc nội dung từ file chứa dữ liệu JSON
  fs.readFile("./src/models/category.json", "utf8", (err, data) => {
    if (err) {
      console.error("Đã xảy ra lỗi khi đọc file:", err);
      res.status(500).send("Đã xảy ra lỗi khi đọc file");
      return;
    }

    try {
      const jsonData = JSON.parse(data); // Chuyển đổi dữ liệu đọc từ file thành đối tượng JSON
      res.status(200).json(jsonData);
      // Trả về dữ liệu JSON như phản hồi từ server
    } catch (error) {
      console.error("Lỗi khi phân tích cú pháp JSON:", error);
      res.status(500).send("Lỗi khi phân tích cú pháp JSON");
    }
  });
});

router.get("/:id", (req, res) => {
  const categoryId = req.params.id; // Lấy id từ req.params
  // Đọc nội dung từ file chứa dữ liệu JSON (products.json)
  fs.readFile("./src/models/category.json", "utf8", (err, data) => {
    if (err) {
      console.error("Đã xảy ra lỗi khi đọc file:", err);
      res.status(500).send("Đã xảy ra lỗi khi đọc file");
      return;
    }

    try {
      const categorys = JSON.parse(data); // Chuyển đổi dữ liệu đọc từ file thành mảng category

      // Tìm kiếm product trong mảng category thông qua id
      const foundCategory = categorys.find((category) => category.category_id === categoryId);

      if (!foundCategory) {
        res.status(404).json({ message: "Không tìm thấy người dùng với id đã nhập." });
      } else {
        res.status(200).json(foundCategory); // Trả về thông tin product tìm thấy dưới dạng JSON
      }
    } catch (error) {
      console.error("Lỗi khi phân tích cú pháp JSON:", error);
      res.status(500).send("Lỗi khi phân tích cú pháp JSON");
    }
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json("them moi product");
});

router.put("/", (req, res) => {
  res.json("sua product");
});

router.delete("/", (req, res) => {
  res.json("xoa  product");
});

module.exports = router;
