function primeOrNot(n){

    if(n<=1) return false;

    for(let i =2 ; i<=n; i++){
        if(n%i==0) return "not prime"
        return "prime"
    }
}

const result = primeOrNot(1)
console.log(result)