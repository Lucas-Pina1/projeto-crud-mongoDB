const router = require("express").Router();

const CustomersController = require('../controllers/customers')

//routes
router.use("/", (request, response) => {
  response.render("index", {
    title: "titulo teste",
  });
});

router.use("/register", (request, response) => {
  response.render("index", {
    title: "cadastro de clientes",
  });
});

router.post("/register/post", CustomersController.add);

module.exports = router;