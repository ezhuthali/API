const authRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const authController = require("../controllers").auth;

authRouter.post("/login", (request, response) => {
});

authRouter.put("/", (request, response) => {
  // put method
});

authRouter.delete("/", (request, response) => {
  // delete method
});

module.exports = authRouter;