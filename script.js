var makeMultiple = function (multiplier){
    var myFunc = function (x){
        return multiplier * x;
    };
    return myFunc;
};

makeMultiple(3);



var makeMultiple = function (multiple,arg){
    return 3 * arg;
};
makeMultiple();

var makeMultiple = function (arg){
    var myFunc = function(x){
        return arg*x;
    };
   return myFunc;
};
makeMultiple(3);

var multiplyBy3 = makeMultiple(3);