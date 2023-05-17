var compose = function(functions) {

	return function(x) {

        if (functions.length === 0) return x;

    let input = x;

        functions=functions.reverse();

    for (const func of functions) {

      input = func(input);

    }

    return input;

    }

};
