const bodyParser = require("body-parser");
const express = require("express");
const router = require("./routes");

//thay the server
const app = express();
const port = 3000; // cong

// dung middleware bodyParser de lay du lieu tu body http reques
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//router
router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
