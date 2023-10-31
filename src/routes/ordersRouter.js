const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  // Đọc nội dung từ file chứa dữ liệu JSON
  fs.readFile("./src/models/orders.json", "utf8", (err, data) => {
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

router.post("/", (req, res) => {
  res.json("them moi product");
});

router.put("/", (req, res) => {
  res.json("them moi product");
});

router.delete("/", (req, res) => {
  res.json("xoa  product");
});

module.exports = router;
