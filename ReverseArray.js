let arr =[1,2,34,45];

function reverseArray(x){

    let arr2=[];
    for(let i=x.length-1; i >=0; i--){
       arr2.push(x[i])
    }
    return arr2;
}
let result = reverseArray(arr)
console.log(result)