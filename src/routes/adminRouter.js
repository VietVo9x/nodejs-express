const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/login", (req, res) => {
  console.log(req);
});

router.get("/logout", (req, res) => {
  console.log(req);
});

//quan ly users
router.get("/users", (req, res) => {
  console.log(req);
});

router.put("/users", (req, res) => {
  console.log(req);
});

router.post("/users", (req, res) => {
  console.log(req);
});

//quan ly products

router.get("/products", (req, res) => {
  console.log(req);
});

router.put("/products", (req, res) => {
  console.log(req);
});

router.post("/products", (req, res) => {
  console.log(req);
});

router.delete("/products", (req, res) => {
  console.log(req);
});

//quanly categories
router.get("/categories ", (req, res) => {
  console.log(req);
});

router.put("/categories ", (req, res) => {
  console.log(req);
});

router.post("/categories ", (req, res) => {
  console.log(req);
});

router.delete("/categories ", (req, res) => {
  console.log(req);
});

//quan ly order

router.get("/orders", (req, res) => {
  console.log(req);
});

router.put("/orders", (req, res) => {
  console.log(req);
});

router.post("/orders", (req, res) => {
  console.log(req);
});

router.delete("/orders", (req, res) => {
  console.log(req);
});

//dashboards

module.exports = router;
