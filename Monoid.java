package Function;

import java.util.function.*;

public interface Monoid<A> extends BinaryOperator<a> {

    A zero();
}

