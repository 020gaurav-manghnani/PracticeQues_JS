let arr = [1,2,3,4,5];

function average(x){

    let sum = x.reduce(function(acc,curr){
        return acc+curr;
    },0)
    return sum/x.length;
}
let result=average(arr);
console.log(result);
