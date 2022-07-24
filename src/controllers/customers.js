const CustomersModel = require("../models/customers");
const { crypto } = require("../utils/password");

async function add(request, response) {
  const { name, age, email, password } = request.body;

  const passwordCrypto = await crypto(password);

  const register = new CustomersModel({
    name,
    age,
    email,
    password: passwordCrypto,
  });

  resgister.save();
  response.send("cadastro realizado");
}

module.exports = {
  add,
};
