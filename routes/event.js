const eventRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const eventController = require("../controllers").event;

eventRouter.get("/list", (request, response) => {
  // get method
});

eventRouter.post("/create", (request, response) => {
  // post method
});

eventRouter.delete("/delete", (request, response) => {
  // delete method
});

eventRouter.post("/update", (request, response) => {
  // post method
});

module.exports = eventRouter;