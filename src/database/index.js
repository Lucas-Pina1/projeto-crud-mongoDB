const mongoose = require("mongoose");

function connect() {
  // mongoose.set("useNewUrlParser", true);
  // mongoose.set("useUniFiedTopology", true);

  mongoose.connect(
    "mongodb://localhost:27017/?readPreference=primary&tls=false"
  );

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("Connected to database!");
  });

  db.on("error", console.error.bind(console, "connection error: "));
}

module.exports = {
  connect
};
