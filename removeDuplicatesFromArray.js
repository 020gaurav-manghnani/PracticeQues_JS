function removeDuplicates(arr){

    const emptyArray = []
    arr.map(x => {
        if(!emptyArray.includes(x)){

            emptyArray.push(x);
        }
    });
    return emptyArray

}

const result = removeDuplicates([1,2,2,2,3,4,5,6,6,5,7,10])
console.log(result)