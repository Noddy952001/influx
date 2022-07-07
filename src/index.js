const express = require("express");
const connect  =  require("../src/connection/connection.js")

const itemController = require("./crud/itemMaster_controller")
const usserCartController = require("./crud/userCart_controller")


const app = express();
app.use(express.json());
app.use("", itemController);
app.use("", usserCartController);





const PORT=process.env.PORT || 2300

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2300");
});

