var toNumber = function (input) {
		//throw Error when input is not a string
    if ( typeof input !== "string" ) throw "Not a string";

    var length = input.length;
    //if the length is zero then return undefined
    if ( length === 0 ) return;
    var c1 = input.charCodeAt(0); 
		//check whether the first character is positive or negative
    if ( c1 === 45 || c1 === 43 ){
        if ( length === 1 ) return;
        var start = 1;
    } else {
        var start = 0;
    }

    var output = 0;
    var c;
    //incase multiple zeroes are there then get to the starting number that is not zero
    while( start < length && input.charCodeAt(start) === 48 ) start++;
		//console.log("start:", start);
    for ( ; start < length; start++){
    		//Xor of number between 48-57 with 48 come in 0-9
        c = input.charCodeAt(start) ^ 48;
        //console.log("c:",c);
        if ( c > 9 ) break;
        output = (output * 10) + c;
    }
		//if the first character is -ve then return -ve
    if ( c1 === 45 ) return output * -1;
    return output;
}

console.log(toNumber("42"))
console.log(toNumber("0"))
console.log(toNumber("42a"))
console.log(toNumber("42a35"))
console.log(toNumber("-42"))
console.log(toNumber("000042"))
console.log(toNumber(""))