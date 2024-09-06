function mergeSortedArray(a,b){
    const c = [...a,...b].sort((x,y)=>x-y)
    return c
}
const result = mergeSortedArray([1,2,0,-1] ,[-1,0,5,3])
console.log(result)