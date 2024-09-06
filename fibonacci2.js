function fibonacci2(n){

    let defaultArr = [0,1];
    for(let i=2;i<=n;i++){
        defaultArr[i] = defaultArr[i-1]+defaultArr[i-2]
    }
    return defaultArr
}

const result = fibonacci2(5)
console.log(result)