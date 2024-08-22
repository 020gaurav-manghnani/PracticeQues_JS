let string = "gaurav is great"

function reverseString(x){

    let newString = '';

    for(let i=x.length-1; i>=0 ;i--){
        newString = newString + x[i];
    }
    return newString
}

let result = reverseString(string);
console.log(result);