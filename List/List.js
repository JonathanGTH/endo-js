// Listing The Monad
var Errors = require('../Errors');
TC = require('../TypeChecker');

var List = function(vals){

    if(!(this instanceof List)) {
	return new List(vals);
    }

    this.val = vals;
    this.list = 'List';
    
