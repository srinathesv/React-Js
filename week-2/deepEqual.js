// "Type 'deepEqual(x,y)' to check if x and y are equal, x and y can be any values")

var deepEqual = function (x, y) {
    if (x === y) { //checks if both are of same types if yes, returns True.
        return true;
    }else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) { 
        if (Object.keys(x).length != Object.keys(y).length)
            return false;
        for (var prop in x) {
            if (y.hasOwnProperty(prop)){  
                if (! deepEqual(x[prop], y[prop]))
                    return false;
                }else
                    return false;
            }

        return true;
    }else 
        return false;
}

console.log(deepEqual("1",))
console.log(deepEqual(6,"6"))
console.log(deepEqual(6,6.0))
console.log(deepEqual('hello',"hello"))
