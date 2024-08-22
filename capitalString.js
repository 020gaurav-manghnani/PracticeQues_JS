let string ="gaurav is the great";

function capitalIt(x){

    let reverseString = '';
    let reverse = string.reduce(function(acc,curr){

        reverseString = reverse.toUpperCase(curr)
    },0)
    return reverseString;

}

let result = capitalIt(string);
console.log(result);