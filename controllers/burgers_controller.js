const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      const hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index.js", hbsObject);
    });
  });


module.exports = router;