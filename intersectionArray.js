let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

function intersection(x,y){
    let newArray = [];
    newArray = x.concat(y);
    return newArray;
}

let result = intersection(arr1,arr2);
console.log(result);
