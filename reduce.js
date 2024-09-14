let array = [1,2,4,5];

//  const result = array.reduce((acc , currVal)=>{

//     return acc+currVal;
// },0)

// console.log(result)

const result = array.filter((x)=> {
    return x>2
} 
).reduce((acc, cuu)=>{
    return acc+cuu;
})

// console.log(result)


let names = ["gaurav" , "sangeet" , "sagar"]

const newArr = names.map((x)=>{
    if(x.length>=3){
        return x.replace(x[2], x[2].toUpperCase());
    }
})

console.log(newArr)
