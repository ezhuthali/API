const authRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const authController = require("../controllers").auth;

authRouter.get("/", (request, response) => {
  // get method
});

authRouter.post("/", (request, response) => {
  // post method
});

authRouter.put("/", (request, response) => {
  // put method
});

authRouter.delete("/", (request, response) => {
  // delete method
});

module.exports = authRouter;