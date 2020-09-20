const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
      const hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

router.post('/api/burgers', function(req, res) {
    burger.insertOne(
      'burger_name',
      req.body.burger_name, function(result) {
        console.log('burger result: ', result);
      // res.json({ id: result.insertId });
      res.redirect('/');
    });
});

router.put('/api/burgers/:id', function(req, res) {
    const condition = `id = ${req.params.id}`;

    const colVal = `devoured = ${req.body.devoured}`;
    console.log("condition", condition);
    console.log('req.body.devoured: ', req.body.devoured)
    burger.updateOne(colVal, condition, function(result) {
      console.log('result:', result)
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;