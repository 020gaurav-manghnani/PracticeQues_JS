//find array length without using array.length

function countArrayLength(arr){

    let count =0;
    arr.forEach((x)=>{

        count++
    })
    return count
}

const result = countArrayLength([1,2,4,5,6,7,8,9]);
console.log(result)

