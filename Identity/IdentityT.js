// Really Just Provided as an Example of how to Constructor Transformers.
var IdentityT = function(m){
    this.runIdentityT = m;
}

var MonadIdentityT = {
    lift : function(ma){
	if(!(ma && ma.monad)){
	    throw new Error("Attempt to lift a non-monadic value into IdentityT");
	}
	return new IdentityT(ma);
    }
}
