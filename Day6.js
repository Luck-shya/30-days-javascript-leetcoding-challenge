var reuce = function(nums, fn, init) {

    let val= init;

    for (var v of nums){

      val=fn(val,v);

  }

    return val;

    

};
