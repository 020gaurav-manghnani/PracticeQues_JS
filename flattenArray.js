function flattenArr(arr){

    //insane man
    // here flat() function will un-nest the nested array to one level
    // i.e. [1,2,4,[5,6],7]   it will not un-nest the inner nested array
    // but infinnity will do that woek damnnn.

    console.log(arr.flat(Infinity))
}

const result = flattenArr([1,[2,3],[4,[5,6]],7]);
console.log(result)