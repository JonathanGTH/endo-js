var endo = require('../endo'),
    Write = endo.Writer,
    Monoid = endo.Monoid;

var tellFactorial = function(n) {
    var Writer = Writer.of(new Monoid.StringM(), 1);

    while(n > 0){

	// Replace the Writers inner value and log a message.
	writer = writer.chain(function(x){
	    return Writer.of(new Monoid.StringM(), x * n);
	}).tell("Mutiplied by: " + n + "\n");

	// once the Write rhas been replaced, tell about the new Value.
	writer = writer.tell("New Value: " + writer.val + "\n");

	n--;
    }

    return writer;
}

console.log(tellFactorial(10).runWriter().snd);
