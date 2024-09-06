function occurance(str){

    
    let countChar = {}
    str.split('').forEach((x)=>{
        debugger
        
        countChar[x] = (countChar[x]||0)+1
    })
    return countChar

}

const result = occurance("gaurav");
console.log(result)