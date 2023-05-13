var createCounter = function(init) {

    let current = init;

    function increment(){

        return ++current;

    }

    function reset(){

        return (current=init);

    }

    function decrement(){

        return --current;

    }

    return {increment, decrement, reset};

};
