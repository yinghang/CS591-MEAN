var express = require('express');
var router = express.Router();
var models = require('../models');
var Strings = models.Strings;

/* GET hw1 listing. */
router.get('/', function(req, res, next) {
  Strings.find({}, function(err, strings){
      if (err) throw err;
      res.json(strings);
  })
});

router.get('/:string', function(req,res, next){
    Strings.findOne({'string': req.params.string}, function(err, string){
        if (err) throw err;
        if (!string) {
            var str = new Strings;
            str.string = req.params.string;
            str.length = req.params.string.length;
            str.save();
            res.json({string: req.params.string, length: req.params.string.length});
        } else {
            console.log("from db");
            res.json(string);
        }
    })
});

router.post('/', function(req, res, next){
    if (!req.body.string) res.json({message: "Please provide string in body!"})
    Strings.findOne({'string': req.body.string}, function(err, string){
        if (err) throw err;
        if (!string) {
            var str = new Strings;
            str.string = req.body.string;
            str.length = req.body.string.length;
            str.save();
            res.json({string: req.body.string, length: req.body.string.length});
        } else {
            console.log("from db");
            res.json(string);
        }
    })
})

router.delete('/:string', function(req, res, next){
    Strings.findOne({'string': req.body.string}, function(err, string){
        Strings.findByIdAndRemove(string._id, function (err, result) {
          if(err) {res.json({message: 'Error deleting'});}
          else {res.json({message: 'success'});}
        })
    })
})

module.exports = router;
