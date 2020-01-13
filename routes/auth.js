const authRouter = require("kvell-scripts").router();
const authController = require("../controllers").auth;
const { celebrate, errors, Joi } = require('celebrate');

authRouter.post("/login", celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().disallow(""),
    password: Joi.string().required().disallow("")
  })
}), errors(), (request, response) => {
  authController.login(request.body).then((tokenObj) => {
    response.status(200).json(tokenObj);
  }, err => {
    console.log(err);
    response.status(500).json(err);
  });
});

authRouter.put("/", (request, response) => {
  // put method
});

authRouter.delete("/", (request, response) => {
  // delete method
});

module.exports = authRouter;