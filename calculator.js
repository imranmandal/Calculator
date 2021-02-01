







//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

//----------Get method------
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//----------Post method
app.post("/",function (req, res) {

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("The result of sum is " + result);
});


//----BMI app--------->>>

app.get("/bmi",function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmi",function (req, res) {

  var ht = parseFloat(req.body.h);
  var wt = parseFloat(req.body.w);

  var bmi = ( wt / (ht * ht) ) * 703;

  res.send("Your BMI is " + bmi);
});

app.listen(3000,function () {
  console.log("server activated at port 3000.");
})
