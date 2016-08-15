var endo = require('../endo');
Identity = endo.Entity;

var ten = new Identity(10);

var result = ten.chain(function(n) {
    return Identity.of(n + 9);
});

console.log(result.toString());


var _result = endo.chan(ten, function(n){
    return Identity.of(n + 9);
});

console.log(_result.toString()); // Identity 19;

