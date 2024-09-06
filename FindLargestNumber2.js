function largestNumber(arr){

    let value =0
    arr.forEach((x)=>{
        if(x>value){
            value=x;
        }
    })
    return value;

}
const result =largestNumber([1,2,14,10,0,-1])
console.log(result)