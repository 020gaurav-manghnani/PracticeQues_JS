
function removeDuplicate(arr){

    const newArr = [];
    arr.forEach(x => {

        if(!newArr.includes(x)){
            newArr.push(x);
        }
        
    });
    return newArr
}

const result = removeDuplicate([1,2,32,12,11,1,2,4,23,32])
console.log(result)
