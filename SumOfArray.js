function sumofarr(arr){

    let sum = 0;
    arr.forEach((x)=>{
        sum = sum+x;
    })
    
    console.log(sum)
}

sumofarr([1,2,3,4,-1])
