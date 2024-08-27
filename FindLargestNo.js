function largestNumber(arr){

let count =0;
arr.forEach(x => {
    if(x>count)
    count=x;
    
});
return count;

}

const result = largestNumber([1,2,10,0,4,-1]);
console.log(result)