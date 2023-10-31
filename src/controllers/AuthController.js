const authService = require("../services/AuthServices");

class AuthController {
  login(req, res, next) {
    //lay duoc dataform
    const data = req.body; //la 1 object { email, password}
    //goi service check data
    authService.checkLoginData(data.email, data.password);
    //kiem tra message tra ve return ve cho router
  }
  logout(req, res, next) {
    console.log(req);
  }
  register(req, res, next) {
    console.log(req);
  }
}
module.exports = new AuthController();
