var Monoid = require('./Monoid/Monoid');
var Either = require('./Either/Either');
Identity = require('./Identity/Identity');
List = require('./List/List');
Maybe = require('./Maybe/Maybe');
State = require('./State/State');
Maybe = require('./Maybe/Maybe');
State = require('./State/State');
Writer = require('./Writer/Writer');
Tuple = require('./Tuple/Tuple');
TC = require('./TypeChecker');

var empty = function(a){
    if(TC.isSemiGroup(a)){
	return a.value.empty ? a.value.empty() : a.value.constructor.empty();
    };
};

var concat = function(a, b){
    if(TC.isMonoid(a) && TC.isMonoid(b)) {
	return a.concat(b);
    }
};
