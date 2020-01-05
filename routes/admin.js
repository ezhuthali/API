const adminRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const adminController = require("../controllers").admin;

adminRouter.get("/", (request, response) => {
  // get method
});

adminRouter.post("/", (request, response) => {
  // post method
});

adminRouter.put("/", (request, response) => {
  // put method
});

adminRouter.delete("/", (request, response) => {
  // delete method
});

module.exports = adminRouter;