var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
})
    .post('/login', function (req,res) {
      var userData=req.body;
      var trueData={
        username:'zxc',
        password:'123'
      };
      if(userData.username===trueData.username&&userData.password===trueData.password){
        res.send({code:302,msg:'success'});
      }
      res.send({code:200,msg:'wrong num'});
    });

module.exports = router;
