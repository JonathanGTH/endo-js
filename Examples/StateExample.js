var endo = require('../endo');
State = endo.State;

var popState = State.get().chain(function(xs){
    var ys = xs.slice(1, xs.length);
    return State.put(ys).chain(function(_){
	return State.of(xs[0]);
    });
});

console.log(popState.runState([1,2,3]).toString()); // (1, [2, 3])

