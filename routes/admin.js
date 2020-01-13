const adminRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const adminController = require("../controllers").admin;

adminRouter.get("/list-users", (request, response) => {
  // get method
});

adminRouter.post("/user", (request, response) => {
  // post method
});

adminRouter.delete("/delete/:id", (request, response) => {
  // delete method
});

module.exports = adminRouter;