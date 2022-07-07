
const ItemMaster = require("../model/itemMaster_model")
const express = require("express");

const app = express();

app.use(express.json());

const router = express.Router();




router.post("/item", async (req, res) => {


    try {
      const user = await ItemMaster.create(req.body);
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("/item", async (req, res) => {
  
      try {
      const users = await ItemMaster.find().lean().exec(); 
      
  
      return res.send(users);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  module.exports = router;