fs = require('fs');
path = require('path');
function f2c(x){
  function convert(str, p1, offset, s)
  {
  return parseFloat(p1)/2 + "rem";
  }
  var s = String(x);
  var test = /(([0-9\.])+?rem)/g;
  return s.replace(test, convert);
}
fs.readFile(path.join(__dirname, 'mixins.styl'), 'utf8', function (err,data) {
  if (err) {
  return console.log(err);
  }
  data = f2c(data);
  return console.log(data);
});