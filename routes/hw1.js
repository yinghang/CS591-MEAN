var express = require('express');
var router = express.Router();

/* GET hw1 listing. */
router.get('/', function(req, res, next) {
  res.json({"message": "this is hw1 route!"});
});

router.get('/:string', function(req,res, next){
    res.json({"string": req.params.string, "length": req.params.string.length});
});

router.post('/', function(req, res, next){
    res.json({"string": req.body.string, "length": req.body.string.length});
})

module.exports = router;
