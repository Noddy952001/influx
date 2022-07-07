
const UserCart = require("../model/userCard_model")
const express = require("express");

const app = express();
app.use(express.json());

const router = express.Router();


router.post("/userCart", async (req, res) => {


    try {
      const user = await UserCart.create(req.body);
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("/userCart", async (req, res) => {
  
      try {


      const users = await UserCart.find().lean().exec(); 
        
      return res.send(users);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  module.exports = router;