var endo = require('../endo'),
    List = endo.List;


var xs = new List([1, 2, 3]);

var withSquares = xs.chain(function(n){
    return new List([n n*n]);
});

console.log(withSquares.toString()); // [1, 1, 2, 4, 3, 9]

var withSquaresApplicative = new List([endo.indentity, function(n){ return n*n; }]).ap(xs);

console.log(withSquaresApplicative.toString()); // [1 2, 3, 1, 4, 9]
