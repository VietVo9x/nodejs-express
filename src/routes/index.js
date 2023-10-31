const routerProduct = require("./productRouter.js");
const routerCategory = require("./categoryRouter.js");
const routerOrder = require("./ordersRouter.js");
const routerAuth = require("./authRouter.js");

function router(app) {
  //router auth
  app.use("/user", routerAuth);
  //router  admin
  app.use("/admin", routerAuth);

  //router product
  app.use("/product", routerProduct);
  //router category
  app.use("/category", routerCategory);
  //router order
  app.use("/order", routerOrder);
}
module.exports = router;
