var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.random();
    var y = Math.random();

    var function1 = Math.atan(x);

    var function2 = Math.exp(y);

    var function3 = Math.expm1(x);

  res.send(`The random numbers are ${x} and ${y}
            <br>Math.atan applied to ${x} is ${function1}
            <br>Math.exp applied to ${y} is ${function2}
            <br>Math.exmp1 applied to ${x} is ${function3}`);
});

module.exports = router;