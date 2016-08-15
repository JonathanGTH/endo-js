var endo = require('../endo'),
    Either = endo.Either;

var something = new Either.Right(10).chain(function(n){
    return new Either.Left('Failure: ' + n);
});

console.log(something.toString()); // Left Failure: 10
